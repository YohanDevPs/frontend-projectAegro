import { FarmFormComponent } from './pages/farm/farm-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmListComponent } from './pages/farm/farm-list.component';
import { PlotFormComponent } from './pages/plot/plot-form.component';
import { PlotListComponent } from './pages/plot/plot-list.component';

const routes: Routes = [


  {path: '', component: FarmFormComponent},

  {path: 'farms', component: FarmListComponent},
  {path: 'farms/formFarmCadastro', component: FarmFormComponent},
  {path: 'farms/formFarmEdit/:id', component: FarmFormComponent},

  {path: 'farms/listPlot/:idFarm', component: PlotListComponent},

  {path: 'formPlot/:idFarm/listPlot', component: PlotListComponent},

  {path: 'farms/listPlot/:id/formPlotCadastro/:idFarm', component: PlotFormComponent},
  {path: 'farms/listPlot/:id/formPlotEdit/:idFarm/:idPlotForEdit', component: PlotFormComponent},

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
