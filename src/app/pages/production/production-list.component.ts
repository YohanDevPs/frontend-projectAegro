import { PlotServiceService } from './../../service/plot-service.service';
import { PlotListComponent } from './../plot/plot-list.component';
import { Production } from './../../model/production-model';
import { ProductionService } from './../../service/production.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plot } from 'src/app/model/plot-model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.scss']
})
export class ProductionListComponent implements OnInit {

  productions: Array<Production> = new  Array<Production>();
  displayedColumns: string[] = ['producao', 'amount', 'action']

  plot: Plot = new Plot();
  idPlot: number;

  constructor(private router: Router,
    private route:ActivatedRoute,
    private productionService: ProductionService,
    private plotService: PlotServiceService,
    private location: Location) { };

    ngOnInit(): void {
      this.idPlot = this.route.snapshot.params['idPlot'];
      if(this.idPlot) {
        this.plotService.plotById(this.idPlot).subscribe(plot => this.plot = plot);
      }
      this.productionList(this.idPlot);
    }

    private productionList(idPlot: number): void{
      this.productionService.listProductionByIdPlot$(idPlot).subscribe(productions => {
      this.productions = productions;
    });
  }

    onEditProduction(production: Production){
      this.router.navigate(['formProductionEdit', this.idPlot, production.idProduction], {relativeTo:this.route});
    }

    onDeleteProduction(production: Production){
      this.productionService.deleteProduction$(production.idProduction).subscribe(() => this.productionList(this.idPlot))
    }

    onAddProduction(){
      this.router.navigate(['formProductionCadastro', this.idPlot], {relativeTo:this.route});
    }

    backPage(){
      this.location.back();
    }

}
