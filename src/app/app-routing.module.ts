import { NgModule } from '@angular/core';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ExperimentDetailsComponent } from './experiments/experiment-details/experiment-details.component'
import { ModelsComponent } from './models/models.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Experiments/:id', component: ExperimentsComponent },
  { path: 'Model', component: ModelsComponent },
  { path: '', redirectTo: '/Experiments/0', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
