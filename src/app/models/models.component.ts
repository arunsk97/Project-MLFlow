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
  public gridData:any;
  public gridFilter:any = '';
  public isFiltered: boolean = false;
  public documentation: boolean = true;
 
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
      this.gridData = this.tableData;
    });
  }

  onClose(){
    this.documentation = !this.documentation;
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

  onSearch(){
    this.tableData = this.gridData.filter((x:any)=> x.name.toLowerCase().includes(this.gridFilter.toLowerCase()));
    this.isFiltered = true;
  }

  onClear(){
    this.gridFilter = '';
    this.tableData = this.gridData;
    this.isFiltered = false;
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
