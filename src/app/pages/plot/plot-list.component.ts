import { FarmServiceService } from 'src/app/service/farm-service.service';
import { PlotServiceService } from './../../service/plot-service.service';
import { Plot } from './../../model/plot-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plot-list',
  templateUrl: './plot-list.component.html',
  styleUrls: ['./plot-list.component.scss']
})
export class PlotListComponent implements OnInit {

  plots: Array<Plot> = new  Array<Plot>();
  displayedColumns: string[] = ['idPlot', 'namePlot', 'plotAreaInHectare', 'action']

  idFarm: number;

  constructor(private router: Router,
    private route:ActivatedRoute,
    private plotService: PlotServiceService) { }


    ngOnInit(): void {
      this.idFarm = this.route.snapshot.params['idFarm'];
      this.plotList(this.idFarm);
    }

    private plotList(idFarm: number): void{
      this.plotService.listPlotByIdFarm$(idFarm).subscribe(plots => {
      this.plots = plots;
    });

    }

    onEdit(plot: Plot){
      this.router.navigate(['formPlotEdit', this.idFarm, plot.idPlot], {relativeTo:this.route});
    }

    onDelete(plot: Plot){
      this.plotService.delete$(plot.idPlot).subscribe(() => this.plotList(this.idFarm))
    }

    onAdd(){
      this.router.navigate(['formPlotCadastro', this.idFarm], {relativeTo:this.route});
    }

    // onAddPlot(farm: Farm){
    //   // this.router.navigate(['listPlot', farm.id], {relativeTo:this.route})
    // }

}
