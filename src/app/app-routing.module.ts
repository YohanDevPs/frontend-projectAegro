import { FarmFormComponent } from './pages/farm/farm-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmListComponent } from './pages/farm/farm-list.component';

const routes: Routes = [
  {path: 'farms', component: FarmListComponent},
  {path: 'farms/form', component: FarmFormComponent},
  {path: 'farms/form/:id', component: FarmFormComponent}

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
