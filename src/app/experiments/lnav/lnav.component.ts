import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCompComponent } from '../../dialog-comp/dialog-comp.component';

@Component({
  selector: 'app-lnav',
  templateUrl: './lnav.component.html',
  styleUrls: ['./lnav.component.css']
})
export class LnavComponent {
  public lnavShown: boolean = true;
  @Input() experiments!:any;
  @Output() getExpDetails = new EventEmitter();

  constructor(private dialog: MatDialog){}

  lnavHide(){
    this.lnavShown = !this.lnavShown;
  }

  onEdit(){
    let dialogRef = this.dialog.open(DialogCompComponent, {
      width: '250px',
      data: { type: 'Share', id: this.experiments.experiment_id, name: this.experiments.name }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  getExperimentbyId(id:any){
    this.getExpDetails.emit(id);
  }
}
