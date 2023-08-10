import { NgModule } from '@angular/core';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ExperimentDetailsComponent } from './experiments/experiment-details/experiment-details.component'
import { ModelsComponent } from './models/models.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'experiments/:id', component: ExperimentsComponent },
  { path: 'experiments', component: ExperimentsComponent },
  { path: 'models', component: ModelsComponent },
  { path: '', redirectTo: '/experiments/0', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
