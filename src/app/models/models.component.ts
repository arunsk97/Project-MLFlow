import { Component } from '@angular/core';
import { ModelsServiveService } from './models-servive.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogCompComponent } from '../dialog-comp/dialog-comp.component';
interface modelData{
  filter?: string,
  max: any,
  order: any
}

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent {
  public tableData:any = [];

  constructor(private modelSvc: ModelsServiveService, public dialog: MatDialog){}

  loadData(){
    let data: modelData ={
      filter: '',
      max: 10,
      order: 'ASC'
    }
    this.modelSvc.getModels(data).subscribe((res:any)=>{
      res["registered_models"].forEach((row:any)=>{
        this.tableData.push({
          'name': row.name,
          'version':row.latest_versions ? row.latest_versions[0].version : '-',
          'staging': '-',
          'production': '-',
          'lastModified': row.latest_versions ? this.lastDate(row.latest_versions[0].last_updated_timestamp) : '-',
          'tags':'-'
        })
        
      });
      //this.tableData = res["registered_models"];
    });
  }
  onCreate(){
    let dialogRef = this.dialog.open(DialogCompComponent, {
      width: '250px',
      data: { type: 'createModel', title: 'Create Model', data: '' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == 'success') this.loadData();
    });
  }

  lastDate(data:any){
    if(data){
      let d = new Date(data);
      return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    }
    return '-';
  }

  ngOnInit(){
    this.loadData();
  }

}
