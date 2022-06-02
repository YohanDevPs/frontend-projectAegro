import { FarmFormComponent } from './pages/farm/farm-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmListComponent } from './pages/farm/farm-list.component';
import { PlotFormComponent } from './pages/plot/plot-form.component';
import { PlotListComponent } from './pages/plot/plot-list.component';

const routes: Routes = [


  {path: '', component: FarmFormComponent},
  {path: 'farms/listPlot/:id', component: PlotListComponent},
  {path: 'farms/listPlot/:id/formPlot/:idFarm', component: PlotFormComponent},
  {path: 'farms/listPlot/:id', component: PlotListComponent},
  {path: 'formPlot/:idFarm/listPlot', component: PlotListComponent},

  // {path: 'plots/:idFarm', component: PlotListComponent},

  {path: 'farms', component: FarmListComponent},
  {path: 'farms/form', component: FarmFormComponent},
  {path: 'farms/form/:id', component: FarmFormComponent}

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
