import { ProductionListComponent } from './pages/production/production-list.component';
import { ProductionFormComponent } from './pages/production/production-form.component';
import { FarmFormComponent } from './pages/farm/farm-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmListComponent } from './pages/farm/farm-list.component';
import { PlotFormComponent } from './pages/plot/plot-form.component';
import { PlotListComponent } from './pages/plot/plot-list.component';

const routes: Routes = [

  {path: '', component: FarmFormComponent},

  {path: 'farms', component: FarmListComponent},
  {path: 'farmform-edit/:idFarm', component: FarmFormComponent},
  {path: 'farmform-cadastro', component: FarmFormComponent},

  {path: 'listPlot/:idFarm', component: PlotListComponent},
  {path: 'plotform-cadastro/:idFarm', component: PlotFormComponent},
  {path: 'plotform-edit/:idPlot/:idFarm', component: PlotFormComponent},

  {path: 'listProduction/:idPlot/:idFarm', component: ProductionListComponent},
  {path: 'productionform-cadastro/:idPlot/:idFarm', component: ProductionFormComponent},
  {path: 'productionform-edit/:idProduction/:idPlot/:idFarm', component: ProductionFormComponent},

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
