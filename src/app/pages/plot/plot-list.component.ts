import { Farm } from './../../model/farm-model';
import { FarmServiceService } from 'src/app/service/farm-service.service';
import { PlotServiceService } from './../../service/plot-service.service';
import { Plot } from './../../model/plot-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { empty } from 'rxjs';

@Component({
  selector: 'app-plot-list',
  templateUrl: './plot-list.component.html',
  styleUrls: ['./plot-list.component.scss']
})
export class PlotListComponent implements OnInit {

  plots: Array<Plot> = new  Array<Plot>();

  farm: Farm = new Farm();

  plotss: Array<Plot> = [] ;

  displayedColumns: string[] = ['map', 'namePlot', 'plotAreaInHectare', 'action']

  idFarm: number;

  constructor(private router: Router,
    private route:ActivatedRoute,
    private plotService: PlotServiceService,
    private farmService: FarmServiceService,
    private locale: Location) { }


    ngOnInit(): void {
      this.idFarm = this.route.snapshot.params['idFarm'];
      if(this.idFarm) {
        this.farmService.farmById(this.idFarm).subscribe(farm => this.farm = farm)
      }
    }

    private plotList(idFarm: number): void{
      this.plotService.listPlotByIdFarm$(idFarm).subscribe(plots => {
      this.plots = plots;
    });

    }

    onDelete(plot: Plot){
      this.plotService.delete$(plot.idPlot).subscribe(() => this.plotList(this.idFarm))
    }

    onEdit(plot: Plot){
      this.router.navigate(['formPlotEdit', this.idFarm, plot.idPlot], {relativeTo:this.route});
    }
    onAdd(){
      this.router.navigate(['formPlotCadastro', this.idFarm], {relativeTo:this.route});
    }

    onAddProduction(plot: Plot){
      this.router.navigate(['listProduction', plot.idPlot], {relativeTo:this.route})
    }

    backPage(){
      this.locale.back();
    }

}
