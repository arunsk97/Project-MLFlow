import { Component, ViewChild } from '@angular/core';
import { ExperimentsService } from './experiments.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCompComponent } from '../dialog-comp/dialog-comp.component';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AgGridAngular } from 'ag-grid-angular';
import { Clipboard } from '@angular/cdk/clipboard';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ExperimentDetailsComponent } from './experiment-details/experiment-details.component';
import { CellClickedEvent, ColDef, GridReadyEvent, ColumnApi, GridApi } from 'ag-grid-community';
interface out {
  run_name: string;
  created: string;
  duration: string
  source: string;
  models: string
};
@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent {
  
  public experiments: any;
  public experimentsIni: any;
  public lnavShown: boolean = true;
  public errorMsg: any = '';
  public expFilter:any = '';
  public success: boolean = false;
  public routeId:any = 0;
  public exp:any = {
    "experiments": [
      {
        "experiment_id": "20",
        "name": "efasfsfasfas",
        "artifact_location": "asdadasd",
        "lifecycle_stage": "active",
        "last_update_time": 1691588064149,
        "creation_time": 1691588064149
      },
      {
        "experiment_id": "19",
        "name": "syatkhdsdaskjsas",
        "artifact_location": "s3://rml-model-artifacts/users/admin/19",
        "lifecycle_stage": "active",
        "last_update_time": 1691588036260,
        "creation_time": 1691588036260
      },
      {
        "experiment_id": "17",
        "name": "Accertify Testing",
        "artifact_location": "s3://rml-model-artifacts/users/admin/17",
        "lifecycle_stage": "active",
        "last_update_time": 1686893714849,
        "creation_time": 1686893714849
      },
      {
        "experiment_id": "11",
        "name": "Latency Testing",
        "artifact_location": "s3://rml-model-artifacts/users/admin/11",
        "lifecycle_stage": "active",
        "last_update_time": 1681985439694,
        "creation_time": 1681985439694
      },
      {
        "experiment_id": "10",
        "name": "_Testing sorting functionality 01",
        "artifact_location": "s3://rml-model-artifacts/users/admin/10",
        "lifecycle_stage": "active",
        "last_update_time": 1687263009424,
        "creation_time": 1679638428893
      },
      {
        "experiment_id": "9",
        "name": "1234 Testing sorting functionality",
        "artifact_location": "s3://rml-model-artifacts/users/admin/9",
        "lifecycle_stage": "active",
        "last_update_time": 1679638318555,
        "creation_time": 1679638318555
      },
      {
        "experiment_id": "8",
        "name": "demo",
        "artifact_location": "s3://rml-model-artifacts/users/admin/8",
        "lifecycle_stage": "active",
        "last_update_time": 1678439973599,
        "creation_time": 1678439973599
      },
      {
        "experiment_id": "7",
        "name": "Tutorial - Bank Customer Churn",
        "artifact_location": "s3://rml-model-artifacts/users/admin/7",
        "lifecycle_stage": "active",
        "last_update_time": 1678439902476,
        "creation_time": 1678439902476
      },
      {
        "experiment_id": "6",
        "name": "Rename 1234",
        "artifact_location": "s3://rml-model-artifacts/users/admin/6",
        "lifecycle_stage": "active",
        "last_update_time": 1677741035783,
        "creation_time": 1675681553637,
        "tags": [
          {
            "key": "mlflow.note.content",
            "value": "<p><em><strong>Testing notes.</strong></em> </p>"
          }
        ]
      },
      {
        "experiment_id": "5",
        "name": "Test123",
        "artifact_location": "s3://rml-model-artifacts/users/admin/5",
        "lifecycle_stage": "active",
        "last_update_time": 1676873339445,
        "creation_time": 1675247919475
      },
      {
        "experiment_id": "4",
        "name": "nlp_demo_4",
        "artifact_location": "s3://rml-model-artifacts/users/admin/4",
        "lifecycle_stage": "active",
        "last_update_time": 1675080941895,
        "creation_time": 1675080941895,
        "tags": [
          {
            "key": "mlflow.note.content",
            "value": "<p><span style=\"background-color:#fbca04;\">This is a </span><em><strong><u><s><span style=\"background-color:#fbca04;\">test</span></s></u></strong></em><span style=\"background-color:#fbca04;\"> note. </span></p>"
          }
        ]
      },
      {
        "experiment_id": "3",
        "name": "Tutorial - Breast Cancer",
        "artifact_location": "s3://rml-model-artifacts/users/admin/3",
        "lifecycle_stage": "active",
        "last_update_time": 1674819341008,
        "creation_time": 1674819341008,
        "tags": [
          {
            "key": "mlflow.note.content",
            "value": "<h5><code><span style=\"color:#d93f0b;\">Testing 12345</span></code></h5>"
          }
        ]
      },
      {
        "experiment_id": "2",
        "name": "nlp_demo_41",
        "artifact_location": "s3://rml-model-artifacts/users/admin/2",
        "lifecycle_stage": "active",
        "last_update_time": 1675047441336,
        "creation_time": 1673441368170,
        "tags": [
          {
            "key": "mlflow.note.content",
            "value": "**testing**"
          }
        ]
      }
    ]
  }
  public expObj:any = {
    "experiment": {
      "experiment_id": "3",
      "name": "Tutorial - Breast Cancer",
      "artifact_location": "s3://rml-model-artifacts/users/admin/3",
      "lifecycle_stage": "active",
      "last_update_time": 1674819341008,
      "creation_time": 1674819341008,
      "tags": [
        {
          "key": "mlflow.note.content",
          "value": "<h5><code><span style=\"color:#d93f0b;\">Testing 12345</span></code></h5>"
        }
      ]
    }
  }
  public selectedIds: any = [];
  public gridFilter: any= '';
  public gridData: any;
  public testuniqueKeys= ['1', '2' , '3', 'abc'];
  public testOptions:any = [ {experiment_id: '1', name:'1aasfasfasf'}, {experiment_id: '2', name:'2aasfasfasf'}, {experiment_id: '3', name:'3aasfasfasf'}];
  public testOptions1:any = [ {experiment_id: '1', name:'1aasfasfasf'}, {experiment_id: '2', name:'2aasfasfasf'}, {experiment_id: '3', name:'3aasfasfasf'}];
  @ViewChild('agGrid') agGrid!: AgGridAngular;
  @ViewChild(ExperimentDetailsComponent) expDetailsComp!: ExperimentDetailsComponent;
  gridApi!: GridApi;
  gridOptions: any;
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
  public enableDetails: boolean = false;

  constructor(private experSvc: ExperimentsService, public dialog: MatDialog,private clipboard: Clipboard, private router: Router,private route: ActivatedRoute ){}

  lnavHide(){
    this.lnavShown = !this.lnavShown;
  }
  async onExpSelect(){
    this.selectedIds = this.experiments.filter((x:any)=>x.selected == true).map((x:any)=> x.experiment_id);
    await this.expDetailsComp.getExperimentbyId(this.selectedIds);
  }

  async onExpNameSelect(id:any){
    this.experiments.forEach((item:any)=>{
      if(item.experiment_id == id) item.selected = true;
      else item.selected = false;
    });
    this.selectedIds = [id];
    await this.expDetailsComp.getExperimentbyId(this.selectedIds);
  }

  onEdit(experiment:any){
    let dialogRef = this.dialog.open(DialogCompComponent, {
      width: '250px',
      data: { type: 'Edit', title: 'Rename', data: experiment }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result == 'success') this.loadModel();
    });
  }

  onCreate(){
    let dialogRef = this.dialog.open(DialogCompComponent, {
      width: '250px',
      data: { type: 'createExp', title: 'Create Experiment', data: '' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == 'success') this.loadModel();
    });
  }

  onDelete(experiment:any){
    let dialogRef = this.dialog.open(DialogCompComponent, {
      width: '250px',
      data: { type: 'Delete', title: `Delete Experiment "${experiment.name}"`, data: experiment }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result == 'success') this.loadModel();
    });
  }

  onExpFilter(){
    setTimeout(()=>{
      if(this.expFilter != '' || this.expFilter != null){
        this.experiments = this.experimentsIni.filter((x:any) => x.name.includes(this.expFilter))
      }else {
        this.experiments = this.experimentsIni;
      }
    },2000);
  }
  
  // onGridReady(params: GridReadyEvent) {
  //   this.gridColumnApi = params.columnApi;
  //   this.gridApi = params.api;
  // }

  // onAgGridFilter(event:any){
  //   if(event.code == 'Enter'){
  //     let data = {
  //       experiment_ids: this.selectedIds,
  //       filter: this.gridFilter,
  //       max_results:100,
  //       order_by: ["attributes.start_time DESC"],
  //       run_view_type: "ACTIVE_ONLY"
  //     }
  //     this.getExperimentDetails(data);
  //   }
  // }

  // copyText(elementId: any){
  //   console.log(document.getElementById(elementId)?.textContent)  
  //   let text:any = document.getElementById(elementId)?.textContent
  //   this.clipboard.copy(text);
  //   this.success = true;
  //   setTimeout(()=>{
  //     this.success = false;
  //   },2000);
  // }

  // onShare(){
  //   let dialogRef = this.dialog.open(DialogCompComponent, {
  //     width: '250px',
  //     data: { type: 'Share', title: 'Get Link', data: document.location.href }
  //   });
  // }

  // onNotesEdit(){
  //   this.ckeditorShown = !this.ckeditorShown;
  // }

  // onNotesSave(){
  //   let data ={
  //     experiment_id : this.experimentObj.Id,
  //     "mlflow.note.content" : this.editedNotes
  //   }
  //   this.experSvc.notesSave(data).subscribe((res:any)=>{
  //     this.ckeditorShown = false;
  //     this.getExperimentbyId([this.experimentObj.Id]);
  //   },(err)=>{
  //     this.editedNotes = this.experimentObj.description;
  //     this.errorMsg = 'Description Not Saved';
  //     setTimeout(()=>{
  //       this.errorMsg = '';
  //     }, 2000);
  //   });
  // }

  // columnKeys(key: any){
  //   return key == 'tags' ? this.columnDefs.filter((x:any)=> x.headerName == '')[0].children :this.columnDefs.filter((x:any)=> x.headerName == key)[0].children;
  // }

  // sortKeys(): any[]{
  //   return this.rowData.length > 0 ? Object.keys(this.rowData[0]).sort((a:any,b:any)=>a.localeCompare(b, undefined, { sensitivity: 'base' })) : [];
  // }
  
  // customSortingMethod(field: string, sortOrder: any){
  //   this.gridColumnApi.applyColumnState({
  //     state: [{ colId: field, sort : sortOrder }],
  //     defaultState: { sort: null },
  //   })
  // }
  
  // toggleOption(key: string, option: string){
  //   let tempData = this.rowData;
  //   this.rowData = [];
  //   const column:any = this.gridColumnApi.getColumn(option);
  //   if (column) {
  //     this.gridColumnApi.setColumnVisible(column, !column.isVisible());
  //     column.colDef.hide = !column.colDef.hide;
  //   }
  //   this.rowData = tempData;
  // }

  // onSelect(selector:any, field: any, sortOrder?: string){
  //   if(selector == 'sort'){
  //     this.sortValue = field;
  //     this.sortOrder = sortOrder;
  //     this.customSortingMethod(field, sortOrder);
  //   } 
  //   else if(selector == 'TimeCre') this.timeCreated = field;
  //   else{
  //     this.stateValue = field;
  //     let data = {
  //       experiment_ids: [this.experimentObj.Id],
  //       max_results:100,
  //       order_by: ["attributes.start_time DESC"],
  //       run_view_type: this.stateValue == 'Active' ? "ACTIVE_ONLY" : "DELETED_ONLY"
  //     }
  //     this.getExperimentDetails(data);
  //   } 
  // }

  // async getExperimentbyId(ids: any[]){
  //   this.loading = true;
  //   for(let i=0; i< ids.length; i++){
  //     let response: any = await this.experSvc.getExperimentbyId(ids[i]).toPromise().catch((err)=>{
  //       this.loading = false;
  //       this.errorMsg = 'Failed to fetch Data';
  //     });
  //     if(response && ids.length <= 1){
  //       this.experimentObj.title= response.experiment.name;
  //       this.experimentObj.Id= response.experiment.experiment_id;
  //       this.experimentObj.location=response.experiment.artifact_location;
  //       this.experimentObj.description= response.experiment.tags ? response.experiment.tags[0].value : '<strong>None</strong>';
  //     }
  //   }
  //   this.editedNotes = this.experimentObj.description;
  //   let data = {
  //     experiment_ids: ids,
  //     max_results:100,
  //     order_by: ["attributes.start_time DESC"],
  //     run_view_type: "ACTIVE_ONLY"
  //   }
  //   this.getExperimentDetails(data);
  // }

  trailData(){
    //----------------------------
    this.exp.experiments.forEach((item:any)=>{
      item['selected'] = false;
    })
    this.experiments = this.experimentsIni = this.exp.experiments.sort((a:any, b:any)=> a.experiment_id-b.experiment_id);
    let id:any;
    this.route.params.subscribe(params => {
      id = params['id'];
      // Use the 'id' parameter in your component
    });
    if(id == 0){
      this.experiments[0].selected = true;
      this.selectedIds = [this.experiments[0].experiment_id];
      this.router.navigate(['/Experiments', this.experiments[0].experiment_id]);
      this.routeId = this.experiments[0].experiment_id;
    }else{
      let ind = this.experiments.findIndex((x:any)=> x.experiment_id == id);
      this.experiments[ind].selected = true;
      this.selectedIds = [this.experiments[ind].experiment_id];
      this.routeId = this.experiments[ind].experiment_id;
    }
    this.enableDetails = true;
    
    // //----------------------------
    // this.experimentObj.title= this.expObj.experiment.name;
    // this.experimentObj.Id= this.expObj.experiment.experiment_id;
    // this.experimentObj.location=this.expObj.experiment.artifact_location;
    // this.experimentObj.description= this.expObj.experiment.tags ? this.expObj.experiment.tags[0].value : '<strong>None</strong>';
    // this.editedNotes = this.experimentObj.description;
    // //----------------------------
    // this.rowData = this.runsData.runs.map((item:any)=>{
    //   let obj: out ={
    //     run_name: item.data.tags.filter((x: any) => x.key == 'mlflow.runName')[0].value,
    //     created:JSON.parse(item.data.tags.filter((x: any) => x.key == "mlflow.log-model.history")[0].value)[0].utc_time_created ,
    //     duration:item.info.end_time-item.info.start_time + 'ms' ,
    //     source: item.data.tags.filter((x: any) => x.key == 'mlflow.source.name')[0].value.includes('ubuntu') ? 'create_exp.py' : 'ipykernel_launcher.py',
    //     models: `<a href="">sklearn</a>'`
    //   }
    //   return obj;
    // })
    // const allKeys = this.runsData.runs.reduce((keys:any, item:any) => {
    //   return keys.concat(Object.keys(item.data));
    // }, []);
    // this.uniqueKeys = Array.from(new Set(allKeys));
    // let tempKey = this.uniqueKeys.pop();
    // this.uniqueKeys.unshift(tempKey);
    // this.columnDefs = this.uniqueKeys.map((key:any) => ({ headerName: key, children: [{}] }));
    // let innerKeys:any = [];
    // this.uniqueKeys.forEach((item:any)=>{
    //   innerKeys = Array.from(new Set(this.runsData.runs[0].data[item].map((item:any) => item.key))); 
    //   this.columnDefs.forEach((row:any)=>{
    //     if(row.headerName == 'tags'){
    //       row.headerName = '';
    //       row.children = [
    //         { headerCheckboxSelection: true,
    //           checkboxSelection: true,
    //           showDisabledCheckboxes: true,
    //           width: 10
    //         },
    //         { field: 'run_name', headerName: 'Run Name', hide: false},
    //         { field: 'created' , headerName: 'Created', hide: false},
    //         { field: 'duration',  headerName: 'Duration', hide: false},
    //         { field: 'source', headerName: 'Source', hide: false},
    //         { field: 'models', headerName: 'Models', hide: false}
    //       ]
    //     }else{
    //       if(item == row.headerName){
    //         row.children = innerKeys.map((key:any) => ({ headerName: key, field: key, hide: true}));
    //       }
    //     }
    //   });
    //   this.rowData.forEach((rowItem: any,index:any)=>{
    //     innerKeys.forEach((key:any)=>{
    //       rowItem[key] = this.runsData.runs[index].data[item].filter((x:any)=> x.key == key)[0] ? this.runsData.runs[index].data[item].filter((x:any)=> x.key == key)[0].value : '-';
    //     })
    //   })
    // })
    // this.gridOptions = {
    //   columnDefs: this.columnDefs,
    //   defaultColDef: {
    //     sortable: true,
    //   },
    //   rowData: this.rowData
    // };
    // this.gridData = this.rowData;
  }

  // getExperimentDetails(data: any){
  //   this.rowData = [];
  //   this.experSvc.getExperimentDetails(data).subscribe((res: any)=>{
  //     if(Object.keys(res).length > 0){
  //       this.rowData = res.runs.map((item:any)=>{
  //         let obj: out ={
  //           run_name: item.data.tags.filter((x: any) => x.key == 'mlflow.runName')[0].value,
  //           created:JSON.parse(item.data.tags.filter((x: any) => x.key == "mlflow.log-model.history")[0].value)[0].utc_time_created ,
  //           duration:item.info.end_time-item.info.start_time + 'ms' ,
  //           source: item.data.tags.filter((x: any) => x.key == 'mlflow.source.name')[0].value.includes('ubuntu') ? 'create_exp.py' : 'ipykernel_launcher.py',
  //           models: 'sklearn'
  //         }
  //         return obj;
  //       })
  //       const allKeys = res.runs.reduce((keys:any, item:any) => {
  //         return keys.concat(Object.keys(item.data));
  //       }, []);
  //       this.uniqueKeys = Array.from(new Set(allKeys));
  //       this.columnDefs = this.uniqueKeys.map((key:any) => ({ headerName: key, children: [{}] }));
  //       let innerKeys:any = [];
  //       this.uniqueKeys.forEach((item:any)=>{
  //         innerKeys = Array.from(new Set(res.runs[0].data[item].map((item:any) => item.key))); 
  //         this.columnDefs.forEach((row:any)=>{
  //           if(row.headerName == 'tags'){
  //             row.headerName = '';
  //             row.children = [
  //               { headerCheckboxSelection: true,
  //                 checkboxSelection: true,
  //                 showDisabledCheckboxes: true,
  //                 width: 10
  //               },
  //               { field: 'run_name', headerName: 'Run Name', hide: false},
  //               { field: 'created' , headerName: 'Created', hide: false},
  //               { field: 'duration',  headerName: 'Duration', hide: false},
  //               { field: 'source', headerName: 'Source', hide: false},
  //               { field: 'models', headerName: 'Models', hide: false}
  //             ]
  //           } else{
  //             if(item == row.headerName){
  //               row.children = innerKeys.map((key:any) => ({ headerName: key, field: key, hide: true}));
  //             }
  //           }
  //         });
  //         this.rowData.forEach((rowItem: any,index:any)=>{
  //           innerKeys.forEach((key:any)=>{
  //             rowItem[key] = res.runs[index].data[item].filter((x:any)=> x.key == key)[0] ? res.runs[index].data[item].filter((x:any)=> x.key == key)[0].value : '-';
  //           })
  //         })
  //       })
  //       this.gridOptions = {
  //         columnDefs: this.columnDefs,
  //         defaultColDef: {
  //           sortable: true,
  //         },
  //         rowData: this.rowData
  //       };
  //       this.gridData = this.rowData;
  //     }
  //     this.loading = false;

  //   },(err)=>{
  //     this.errorMsg = 'Failed to fetch Data';
  //     this.loading = false;
  //   })
  // }

  loadModel(){
    //this.loading = true;
    this.experSvc.getExperiments().subscribe((res)=>{
      let result: any = res;
      result.experiments.forEach((item:any)=>{
        item['selected'] = false;
      })
      this.experiments = this.experimentsIni = result.experiments.sort((a:any, b:any)=> a.experiment_id-b.experiment_id);
      let id:any;
      this.route.params.subscribe(params => {
        id = params['id'];
        // Use the 'id' parameter in your component
      });
      if(id == undefined || id == 0){
        this.experiments[0].selected = true;
        this.selectedIds = [this.experiments[0].experiment_id];
        this.router.navigate(['/experiments', this.experiments[0].experiment_id]);
        this.routeId = this.experiments[0].experiment_id;
      }else{
        let ind = this.experiments.findIndex((x:any)=> x.experiment_id == id);
        this.experiments[ind].selected = true;
        this.selectedIds = [this.experiments[ind].experiment_id];
        this.routeId = this.experiments[ind].experiment_id;
      }
      this.enableDetails = true;
      //this.getExperimentbyId(this.selectedIds);
    },(err)=>{
      this.enableDetails = true;
      this.expDetailsComp.loading = false;
      this.expDetailsComp.errorMsg = 'Failed to fetch Data';
    })
  }

  ngOnInit(){
    this.loadModel();
    //this.trailData();
    //this.loading = false;
  }
}
