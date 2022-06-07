import { Plot } from 'src/app/model/plot-model';
import { PlotService } from '../../../service/plot-service.service';
import { Farm } from 'src/app/model/farm-model';
import { Production } from '../../../model/production-model';
import { ProductionService } from '../../../service/production.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.scss']
})
export class ProductionListComponent implements OnInit {

  productions: Array<Production> = [];
  displayedColumns: string[] = ['producao', 'amount', 'action']

  plot: Plot = new Plot();
  farm: Farm = new Farm();
  idPlot: number;
  idFarm: number;

  constructor(private router: Router,
    private route:ActivatedRoute,
    private productionService: ProductionService,
    private plotService: PlotService) { };

    ngOnInit(): void {
      this.idPlot = this.route.snapshot.params['idPlot'];
      this.idFarm = this.route.snapshot.params['idFarm'];
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

  onAddProduction(){
    console.log("FarmId: ", this.idFarm)
    this.router.navigate(['productionform-cadastro', this.idPlot, this.idFarm]);
  }

  onEditProduction(production: Production){
    this.router.navigate(['productionform-edit', production.idProduction, this.idPlot, this.idFarm]);
  }

  onDeleteProduction(production: Production){
    this.productionService.deleteProduction$(production.idProduction).subscribe(() => this.productionList(this.idPlot))
  }

  onDeletePlot(){
    this.plotService.delete$(this.idPlot).subscribe(() => this.backPage());
  }

  onEditPlot(){
    this.router.navigate(['plotform-edit', this.idPlot, this.idFarm]);
  }

  backPage(){
    this.router.navigate(['listPlot', this.idFarm]);
  }

}
