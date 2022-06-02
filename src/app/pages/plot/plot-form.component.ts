import { Farm } from './../../model/farm-model';
import { FarmServiceService } from './../../service/farm-service.service';
import { PlotServiceService } from './../../service/plot-service.service';
import { Plot } from './../../model/plot-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

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
    private plotService: PlotServiceService) { }

  ngOnInit(): void {
      const idPlot = this.route.snapshot.params['idPlotForEdit'];
      this.idPlotForEdit = idPlot;
      if(idPlot) {
        this.plotService.plotById(idPlot).subscribe(plot => this.plot = plot)
      }
      this.idFarm = this.route.snapshot.params['idFarm'];
      console.log("Testeee: " + this.idFarm);
  }

  salvarPlot(){
    this.plot.idPlot ?
      this.plotService.putPlot$(this.plot.idPlot , this.plot).subscribe(() => this.cancelar()):
      this.plotService.postPlot$(this.plot, this.idFarm).subscribe(() => this.cancelar());
    // }
  }

  // salvar(){
  //   this.farm.id ?
  //     this.farmService.put$(this.farm.id, this.farm).subscribe(() => this.cancelar()) :
  //     this.farmService.post$(this.farm).subscribe(() => this.cancelar());
  // }
  cancelar(){


    this.router.navigate(['farms/listPlot', this.idFarm]);
  }


}
// ngOnInit(): void {
//   const id = this.route.snapshot.params['id'];
//   if(id) {
//     this.farmService.farmById(id).subscribe(farm => this.farm = farm)
//   }
// }


// cancelar(){
//     this.router.navigate(['farms'])
// }

// }
