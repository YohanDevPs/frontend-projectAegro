import { PlotServiceService } from './../../service/plot-service.service';
import { Plot } from './../../model/plot-model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-plot-form',
  templateUrl: './plot-form.component.html',
  styleUrls: ['./plot-form.component.scss']
})
export class PlotFormComponent implements OnInit {

  plot: Plot = new Plot();

  idFarm: number
  idPlotForEdit: number;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private plotService: PlotServiceService,
    private location: Location) { }

  ngOnInit(): void {
      const idPlot = this.route.snapshot.params['idPlotForEdit'];
      this.idPlotForEdit = idPlot;
      if(idPlot) {
        this.plotService.plotById(idPlot).subscribe(plot => this.plot = plot)
      }
      this.idFarm = this.route.snapshot.params['idFarm'];
  }

  salvarPlot(){
    console.log("Obejto Plot: ",this.plot);
    console.log("Id da Fazenda: ",this.idFarm);

    this.plot.idPlot ?
      this.plotService.putPlot$(this.plot.idPlot , this.plot).subscribe(() => this.cancelar()):
      this.plotService.postPlot$(this.plot, this.idFarm).subscribe(() => this.cancelar());
  }

  cancelar(){
    this.location.back();
  }
}
