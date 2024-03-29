import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-image-renderer',
  template: `
    <div *ngIf="params.column.colId == 'source'; else anchorTag">
      <i class='fas fa-laptop'></i>
      <span >{{ params.value }}</span>
    </div>
    <ng-template #anchorTag>
      <div>
        <svg *ngIf="params.column.colId == 'models'" xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.7265 0.726585C7.47317 0.473252 7.13317 0.333252 6.77984 0.333252H1.99984C1.2665 0.333252 0.666504 0.933252 0.666504 1.66659V12.3333C0.666504 13.0666 1.25984 13.6666 1.99317 13.6666H9.99984C10.7332 13.6666 11.3332 13.0666 11.3332 12.3333V4.88658C11.3332 4.53325 11.1932 4.19325 10.9398 3.94659L7.7265 0.726585ZM6.66648 4.33333V1.33333L10.3331 5H7.33315C6.96648 5 6.66648 4.7 6.66648 4.33333ZM5.99982 6.33333C5.99982 6.64213 5.92984 6.93457 5.80487 7.19568L7.13747 8.52828C7.39858 8.40331 7.69103 8.33333 7.99982 8.33333C9.10439 8.33333 9.99982 9.22876 9.99982 10.3333C9.99982 11.4379 9.10439 12.3333 7.99982 12.3333C6.89525 12.3333 5.99982 11.4379 5.99982 10.3333C5.99982 10.0246 6.06977 9.7322 6.1947 9.47113L4.86202 8.13845C4.60095 8.26338 4.30855 8.33333 3.99982 8.33333C2.89525 8.33333 1.99982 7.4379 1.99982 6.33333C1.99982 5.22876 2.89525 4.33333 3.99982 4.33333C5.10439 4.33333 5.99982 5.22876 5.99982 6.33333ZM3.99982 7.00008C4.36801 7.00008 4.66648 6.7016 4.66648 6.33342C4.66648 5.96523 4.36801 5.66675 3.99982 5.66675C3.63163 5.66675 3.33315 5.96523 3.33315 6.33342C3.33315 6.7016 3.63163 7.00008 3.99982 7.00008ZM8.66648 10.3334C8.66648 10.7016 8.36801 11.0001 7.99982 11.0001C7.63163 11.0001 7.33315 10.7016 7.33315 10.3334C7.33315 9.96522 7.63163 9.66675 7.99982 9.66675C8.36801 9.66675 8.66648 9.96522 8.66648 10.3334Z" fill="#6B6B6B"/>
        </svg>
        <a target="_blank" href="{{hrefStrg}}">{{ params.value }}</a>
      </div>
    </ng-template>
  `,
})
export class ImageRendererComponent implements ICellRendererAngularComp {
  params: any;
  imageURL!: string;
  hrefStrg!:string;

  agInit(params: any): void {
    this.params = params;
    this.imageURL = params.column.colId == 'source' ? 'https://adminerp9g-server.ostack.babyrocket.net/st…media/laptop.f3a6b3016fbf319305f629fcbcf937a9.svg' : 'https://adminerp9g-server.ostack.babyrocket.net/st…media/laptop.f3a6b3016fbf319305f629fcbcf937a9.svg';
    this.hrefStrg = params.column.colId == 'models' ? 'https://adminerp9g-server.ostack.babyrocket.net/#/experiments/3/runs/1c231042563b4d1ea40d1404c02ecbef/artifactPath/model': 'https://adminerp9g-server.ostack.babyrocket.net/#/experiments/3/runs/1c231042563b4d1ea40d1404c02ecbef';
  }

  refresh(params: any): boolean {
    return false;
  }
}
