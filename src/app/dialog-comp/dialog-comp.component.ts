import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExperimentsService } from '../experiments/experiments.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-dialog-comp',
  templateUrl: './dialog-comp.component.html',
  styleUrls: ['./dialog-comp.component.css']
})
export class DialogCompComponent {

  public inputData =this.data.type == 'Edit'? this.data.data.name : this.data.data;
  public errorMsg = '';
  public createData = {
    name: '',
    artifact_location: ''
  }
  public success:boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<any>, private expSvc: ExperimentsService, private clipboard: Clipboard) {}

  close(msg:any){
    this.dialogRef.close(msg);
  }

  rename(){
    let data = {id: this.data.data.experiment_id, name: this.inputData}
    this.expSvc.rename(data).subscribe((res:any)=>{
      setTimeout(()=>{
        this.close('success');
      },2000);
    }, (err:any)=>{
      this.errorMsg = 'Name already exists'
      setTimeout(()=>{
        this.errorMsg = ''
      }, 3000)
    })
  }

  share(){
    this.clipboard.copy(this.inputData);
    this.success = true;
    setTimeout(()=>{
      this.success = false;
    }, 2000)
  }

  deleteExp(){
    let data = {id: this.data.data.experiment_id, name: this.data.data.name}
    this.expSvc.delete(data).subscribe((res:any)=>{
      setTimeout(()=>{
        this.close('success');
      },2000);
    }, (err:any)=>{
      this.errorMsg = 'Not Deleted'
      setTimeout(()=>{
        this.errorMsg = ''
      }, 3000)
    })
  }

  createExp(){
    let data: any = {
      name: this.createData.name
    }
    if(this.createData.artifact_location.length > 0) data['artifact_location'] = this.createData.artifact_location;
  }
}
