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
  public selectedIds: any = [];
  public gridFilter: any= '';
  public gridData: any;
  @ViewChild(ExperimentDetailsComponent) expDetailsComp!: ExperimentDetailsComponent;
  gridOptions: any;
  public experimentObj: any = {
    title: '',
    Id:'',
    location: '',
    description: ''
  }
  // Data that gets displayed in the grid
  public rowData: any = [];
  public uniqueKeys: any = [];
  public enableDetails: boolean = false;

  constructor(private experSvc: ExperimentsService, public dialog: MatDialog,private clipboard: Clipboard, private router: Router,private route: ActivatedRoute ){}

  lnavHide(){
    this.lnavShown = !this.lnavShown;
  }
  async onExpSelect(){
    this.selectedIds = this.experiments.filter((x:any)=>x.selected == true).map((x:any)=> x.experiment_id);
    this.routeId = this.selectedIds;
    this.router.navigate(['/experiments', this.selectedIds.join(',')]);
    this.expDetailsComp.getExperimentbyId(this.selectedIds);
  }

  async onExpNameSelect(id:any){
    this.experiments.forEach((item:any)=>{
      if(item.experiment_id == id) item.selected = true;
      else item.selected = false;
    });
    this.selectedIds = [id];
    this.router.navigate(['/experiments', id]);
    this.routeId = this.selectedIds;
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

  loadModel(){
    this.experSvc.getExperiments().subscribe((res)=>{
      let result: any = res;
      result.experiments.forEach((item:any)=>{
        item['selected'] = false;
      })
      this.experiments = this.experimentsIni = result.experiments.sort((a:any, b:any)=> a.experiment_id-b.experiment_id);
      let id:any;
      this.route.params.subscribe(params => {
        id = params['id'].split(',');
        // Use the 'id' parameter in your component
      });
      if(id == undefined || id.length == 1 && id[0] == '0'){
        this.experiments[0].selected = true;
        this.selectedIds = [this.experiments[0].experiment_id];
        this.router.navigate(['/experiments', this.experiments[0].experiment_id]);
        this.routeId = [this.experiments[0].experiment_id];
      }else{
        id.forEach((item:any)=>{
          let ind = this.experiments.findIndex((x:any)=> x.experiment_id == item);
          if(ind > -1)this.experiments[ind].selected = true;
        })
        this.selectedIds = id;
        this.routeId = id;
      }
      this.enableDetails = true;
    },(err)=>{
      this.enableDetails = true;
      this.expDetailsComp.loading = false;
      this.expDetailsComp.errorMsg = 'Failed to fetch Data';
    })
  }

  ngOnInit(){
    this.loadModel();
  }
}
