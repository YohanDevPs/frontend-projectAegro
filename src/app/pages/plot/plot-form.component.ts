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

  constructor(private router: Router,
    private route: ActivatedRoute,
    private plotService: PlotServiceService) { }

  ngOnInit(): void {
    this.idFarm = this.route.snapshot.params['idFarm'];
  }

  salvarPlot(){
      this.plotService.postPlot$(this.plot, this.idFarm).subscribe(() => this.cancelar());
  }

  cancelar(){
    this.router.navigate(['farms/listPlot', this.idFarm]);
  }


}
