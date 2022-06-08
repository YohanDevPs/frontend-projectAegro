import { Plot } from '../../../model/plot-model';
import { PlotService } from '../../../service/plot-service.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private plotService: PlotService) { }

  ngOnInit(): void {
      let idPlot = this.route.snapshot.params['idPlot'];
      this.idPlotForEdit = idPlot;
      if(idPlot) {
        this.plotService.plotById(idPlot).subscribe(plot => this.plot = plot);
      }
      this.idFarm = this.route.snapshot.params['idFarm'];
  }

  validationArea(){
  if(this.plot.plotAreaInHectare > 0){
    alert("Área deve ser maior que zero!")
  }
}

  salvarPlot(){
    if(this.plot.plotAreaInHectare > 0 && this.plot.idPlot == undefined){
      this.plotService.postPlot$(this.plot, this.idFarm).subscribe(() => this.cancelar());
    }else{
      if(this.plot.plotAreaInHectare > 0 && this.plot.idPlot > 0){
        this.plotService.putPlot$(this.plot.idPlot , this.plot).subscribe(() => this.cancelar());
      }else{
        console.log("Else do post")
        alert("Área inválida!");
        this.cancelar();
      }
    }
  }


  cancelar(){
    this.router.navigate(['listPlot', this.idFarm]);
  }
}
