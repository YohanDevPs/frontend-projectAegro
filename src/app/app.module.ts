import { FarmListComponent } from './pages/farm/farm-list/farm-list.component';
import { FarmFormComponent } from './pages/farm/farm-form/farm-form.component';
import { PlotListComponent } from './pages/plot/plot-list/plot-list.component';
import { PlotFormComponent } from './pages/plot/plot-form/plot-form.component';
import { ProductionListComponent } from './pages/production/production-list/production-list.component';
import { ProductionFormComponent } from './pages/production/production-form/production-form.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './navigation/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { DialogDeleteFarmComponent } from './pages/farm/dialog-delete-farm/dialog-delete-farm.component';
import { DialogDeletePlotComponent } from './pages/plot/dialog-delete-plot/dialog-delete-plot.component';
import { DialogDeleteProductionComponent } from './pages/production/dialog-delete-production/dialog-delete-production.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FarmListComponent,
    FarmFormComponent,
    PlotFormComponent,
    PlotListComponent,
    ProductionFormComponent,
    ProductionListComponent,
    DialogDeleteFarmComponent,
    DialogDeletePlotComponent,
    DialogDeleteProductionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
