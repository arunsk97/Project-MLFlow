import { Component, Input, ViewChild } from '@angular/core';
import { ExperimentsService } from '../experiments.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCompComponent } from '../../dialog-comp/dialog-comp.component';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AgGridAngular } from 'ag-grid-angular';
import { Clipboard } from '@angular/cdk/clipboard';
import { ImageRendererComponent } from '../../image-renderer/image-renderer.component';
import { ColDef, GridReadyEvent, ColumnApi, GridOptions, GridApi } from 'ag-grid-community';
interface out {
  run_name: string;
  created: string;
  duration: string
  source: string;
  models: string
};

@Component({
  selector: 'app-experiment-details',
  templateUrl: './experiment-details.component.html',
  styleUrls: ['./experiment-details.component.css']
})
export class ExperimentDetailsComponent {
  private gridApi!: GridApi;
  public editor = ClassicEditor;
  public sortValue: any = "Created";
  public sortOrder: any = 'desc'
  public timeCreated: any = "All time";
  public stateValue: any = "Active";
  public columnDefs: any = [];
  public isAllChecked: any = {};
  public notes: boolean = true;
  public errorMsg: any = '';
  public expFilter:any = '';
  public success: boolean = false;
  public ckeditorShown: boolean = false;
  public editedNotes: any = '';
  public loading = true;
  public filterHoverText = `Search runs using a simplified version of the SQL WHERE clause. Learn more
  Examples:
  • metrics.rmse >= 0.8
  • metrics.'f1 score' < 1
  • params.model = 'tree'
  • attributes.run_name = 'my run'
  • tags.'mlflow.user' = 'myUser'
  • metric.f1_score > 0.9 AND params.model = 'tree'
  • attributes.run_id IN ('a1b2c3d4', 'e5f6g7h8')
  • tags.model_class LIKE 'sklearn.linear_model%'`;
  public gridFilter: any= '';
  public gridData: any;
  @ViewChild('agGrid') agGrid!: AgGridAngular;
  @Input() id:any = '';
  gridOptions!: GridOptions;
  public experimentObj: any = {
    title: '',
    Id:'',
    location: '',
    description: ''
  }
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  // Data that gets displayed in the grid
  public rowData: any = [];
  public uniqueKeys: any = [];
  private gridColumnApi!: ColumnApi;

  constructor(private experSvc: ExperimentsService, public dialog: MatDialog,private clipboard: Clipboard ){}
  
  onGridReady(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
    this.gridApi = params.api;
  }

  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }

  removeInfo(){
    this.notes = !this.notes;
  }

  onAgGridFilter(event:any){
    if(event.code == 'Enter'){
      let data = {
        experiment_ids: this.id,
        filter: this.gridFilter,
        max_results:100,
        order_by: ["attributes.start_time DESC"],
        run_view_type: "ACTIVE_ONLY"
      }
      this.getExperimentDetails(data);
    }
  }

  copyText(elementId: any){
    console.log(document.getElementById(elementId)?.textContent)  
    let text:any = document.getElementById(elementId)?.textContent
    this.clipboard.copy(text);
    this.success = true;
    setTimeout(()=>{
      this.success = false;
    },2000);
  }

  onShare(){
    let dialogRef = this.dialog.open(DialogCompComponent, {
      width: '250px',
      data: { type: 'Share', title: 'Get Link', data: document.location.href }
    });
  }

  onNotesEdit(){
    this.ckeditorShown = !this.ckeditorShown;
  }

  onNotesSave(){
    let data ={
      experiment_id : this.experimentObj.Id,
      "mlflow.note.content" : this.editedNotes
    }
    this.experSvc.notesSave(data).subscribe((res:any)=>{
      this.ckeditorShown = false;
      this.getExperimentbyId([this.experimentObj.Id]);
    },(err)=>{
      this.editedNotes = this.experimentObj.description;
      this.errorMsg = 'Description Not Saved';
      setTimeout(()=>{
        this.errorMsg = '';
      }, 2000);
    });
  }

  columnKeys(key: any){
    return key == 'tags' ? this.columnDefs.filter((x:any)=> x.headerName == '')[0].children :this.columnDefs.filter((x:any)=> x.headerName == key)[0].children;
  }

  sortKeys(): any[]{
    return this.rowData.length > 0 ? Object.keys(this.rowData[0]).sort((a:any,b:any)=>a.localeCompare(b, undefined, { sensitivity: 'base' })) : [];
  }
  
  customSortingMethod(field: string, sortOrder: any){
    this.gridColumnApi.applyColumnState({
      state: [{ colId: field, sort : sortOrder }],
      defaultState: { sort: null },
    })
  }
  
  toggleOption(key: string, option: string){
    let tempData = this.rowData;
    this.rowData = [];
    const column:any = this.gridColumnApi.getColumn(option);
    if (column) {
      this.gridColumnApi.setColumnVisible(column, !column.isVisible());
      column.colDef.hide = !column.colDef.hide;
    }
    this.rowData = tempData;
  }

  onSelect(selector:any, field: any, sortOrder?: string){
    if(selector == 'sort'){
      this.sortValue = field;
      this.sortOrder = sortOrder;
      this.customSortingMethod(field, sortOrder);
    } 
    else if(selector == 'TimeCre') this.timeCreated = field;
    else{
      this.stateValue = field;
      let data = {
        experiment_ids: [this.experimentObj.Id],
        max_results:100,
        order_by: ["attributes.start_time DESC"],
        run_view_type: this.stateValue == 'Active' ? "ACTIVE_ONLY" : "DELETED_ONLY"
      }
      this.getExperimentDetails(data);
    } 
  }

  async getExperimentbyId(ids: any[]){
    this.loading = true;
    for(let i=0; i< ids.length; i++){
      let response: any = await this.experSvc.getExperimentbyId(ids[i]).toPromise().catch((err)=>{
        this.loading = false;
        this.errorMsg = 'Failed to fetch Data';
      });
      if(response && ids.length <= 1){
        this.experimentObj.title= response.experiment.name;
        this.experimentObj.Id= response.experiment.experiment_id;
        this.experimentObj.location=response.experiment.artifact_location;
        this.experimentObj.description= response.experiment.tags ? response.experiment.tags[0].value : '<strong>None</strong>';
      }
    }
    this.editedNotes = this.experimentObj.description;
    let data = {
      experiment_ids: ids,
      max_results:100,
      order_by: ["attributes.start_time DESC"],
      run_view_type: "ACTIVE_ONLY"
    }
    this.getExperimentDetails(data);
  }

  getExperimentDetails(data: any){
    this.rowData = [];
    this.experSvc.getExperimentDetails(data).subscribe((res: any)=>{
      if(Object.keys(res).length > 0){
        this.rowData = res.runs.map((item:any)=>{
          let obj: out ={
            run_name: item.data.tags.filter((x: any) => x.key == 'mlflow.runName')[0].value,
            created:item.data.tags.filter((x: any) => x.key == "mlflow.log-model.history")[0] ? JSON.parse(item.data.tags.filter((x: any) => x.key == "mlflow.log-model.history")[0].value)[0].utc_time_created : '-' ,
            duration:item.info.end_time-item.info.start_time + 'ms' ,
            source: item.data.tags.filter((x: any) => x.key == 'mlflow.source.name')[0].value.includes('ubuntu') ? 'create_exp.py' : 'ipykernel_launcher.py',
            models: 'sklearn'
          }
          return obj;
        })
        const allKeys = res.runs.reduce((keys:any, item:any) => {
          return keys.concat(Object.keys(item.data));
        }, []);
        this.uniqueKeys = Array.from(new Set(allKeys));
        this.columnDefs = this.uniqueKeys.map((key:any) => ({ headerName: key, children: [{}] }));
        let innerKeys:any = [];
        this.uniqueKeys.forEach((item:any)=>{
          if(res.runs[0].data[item]) innerKeys = Array.from(new Set(res.runs[0].data[item].map((item:any) => item.key))); 
          this.columnDefs.forEach((row:any)=>{
            if(row.headerName == 'tags'){
              row.headerName = '';
              row.children = [
                { headerCheckboxSelection: true,
                  checkboxSelection: true,
                  showDisabledCheckboxes: true,
                  width: 10,pinned:'left'
                },
                { field: 'run_name', headerName: 'Run Name', hide: false,pinned:'left', cellRenderer: ImageRendererComponent},
                { field: 'created' , headerName: 'Created', hide: false,pinned:'left'},
                { field: 'duration',  headerName: 'Duration', hide: false},
                { field: 'source', headerName: 'Source', hide: false, cellRenderer: ImageRendererComponent},
              { field: 'models', headerName: 'Models', hide: false, cellRenderer: ImageRendererComponent}
              ]
            } else{
              if(item == row.headerName){
                row.children = innerKeys.map((key:any) => ({ headerName: key, field: key, hide: true}));
              }
            }
          });
          this.rowData.forEach((rowItem: any,index:any)=>{
            innerKeys.forEach((key:any)=>{
              rowItem[key] = res.runs[index] && res.runs[index].data[item] &&res.runs[index].data[item].filter((x:any)=> x.key == key)[0] ? res.runs[index].data[item].filter((x:any)=> x.key == key)[0].value : '-';
            })
          })
        })
        this.gridOptions = {
          columnDefs: this.columnDefs,
          defaultColDef: {
            sortable: true,
          },
          rowData: this.rowData
        };
        this.gridData = this.rowData;
      }
      this.loading = false;

    },(err)=>{
      this.errorMsg = 'Failed to fetch Data';
      this.loading = false;
    })
  }

  ngOnInit(){
    this.getExperimentbyId(this.id)
    this.loading = false;
  }

}
