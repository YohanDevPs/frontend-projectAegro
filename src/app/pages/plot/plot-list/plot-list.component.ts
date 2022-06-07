import { Farm } from '../../../model/farm-model';
import { FarmService } from 'src/app/service/farm-service.service';
import { Plot } from '../../../model/plot-model';
import { PlotService } from '../../../service/plot-service.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogDeletePlotComponent } from '../dialog-delete-plot/dialog-delete-plot.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-plot-list',
  templateUrl: './plot-list.component.html',
  styleUrls: ['./plot-list.component.scss']
})
export class PlotListComponent implements OnInit {

  plots: Array<Plot> = [];

  farm: Farm = new Farm();

  displayedColumns: string[] = ['map', 'namePlot', 'plotAreaInHectare', 'action']

  idFarm: number;

  constructor(private router: Router,
    private route:ActivatedRoute,
    private plotService: PlotService,
    private farmService: FarmService,
    public dialog: MatDialog) { }


    ngOnInit(): void {
      this.idFarm = this.route.snapshot.params['idFarm'];
      if(this.idFarm) {
        this.farmService.farmById(this.idFarm).subscribe(farm => this.farm = farm)
      }

      this.plotList(this.idFarm);
    }

    warningDeletePlot(talhao: Plot): void {
      const dialogRef = this.dialog.open(DialogDeletePlotComponent, {
        width: '450px',
        data: {plot: talhao}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.plotList(this.idFarm);
      });
    }

    private plotList(idFarm: number): Array<Plot> {
      if (this.plotService.listPlotByIdFarm$(idFarm) === undefined ){
        console.log("Lista vazia")
        return this.plots = [];
      }else{
        this.plotService.listPlotByIdFarm$(idFarm).subscribe(plots => {
        this.plots = plots;
        return this.plots;
      });
     }
    }

    addPlot(){
      this.router.navigate(['plotform-cadastro', this.idFarm]);
    }

    editPlot(plot: Plot){
      this.router.navigate(['plotform-edit', plot.idPlot, this.idFarm]);
    }

    onEditFarm(){
      this.router.navigate(['farmform-edit', this.idFarm])
    }

    onDeleteFarm(){
      this.farmService.delete$(this.idFarm).subscribe(() => this.backPage())
    }

    deletePlot(plot: Plot){
      this.plotService.delete$(plot.idPlot).subscribe(() => this.plotList(this.idFarm))
    }

    onAddProduction(plot: Plot){
      this.router.navigate(['listProduction', plot.idPlot, this.idFarm])
    }

    backPage(){
      this.router.navigate(['farms']);
    }

}
