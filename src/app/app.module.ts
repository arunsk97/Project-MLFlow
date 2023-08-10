import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ModelsComponent } from './models/models.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogCompComponent } from './dialog-comp/dialog-comp.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LnavComponent } from './experiments/lnav/lnav.component';
import { ExperimentDetailsComponent } from './experiments/experiment-details/experiment-details.component';
import { ImageRendererComponent } from './image-renderer/image-renderer.component';
import { NzTableModule } from 'ng-zorro-antd/table';
@NgModule({
  declarations: [
    AppComponent,
    ExperimentsComponent,
    ModelsComponent,
    DialogCompComponent,
    PageNotFoundComponent,
    LnavComponent,
    ExperimentDetailsComponent,
    ImageRendererComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AgGridModule,
    CKEditorModule,
    ClipboardModule,
    FormsModule,
    NzTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
