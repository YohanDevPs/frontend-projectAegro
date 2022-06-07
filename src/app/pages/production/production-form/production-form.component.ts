import { ProductionService } from '../../../service/production.service';
import { Production } from '../../../model/production-model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-production-form',
  templateUrl: './production-form.component.html',
  styleUrls: ['./production-form.component.scss']
})
export class ProductionFormComponent implements OnInit {

  production: Production = new Production();

  idFarm: number
  idPlot: number
  idProductionForEdit: number;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private productionService: ProductionService) { }

  ngOnInit(): void {
      const idProduction = this.route.snapshot.params['idProduction'];
      this.idFarm = this.route.snapshot.params['idFarm'];
      this.idProductionForEdit = idProduction;
      if(idProduction) {
        this.productionService.productionById(idProduction).subscribe(production => this.production = production)
      }
      this.idPlot = this.route.snapshot.params['idPlot'];
  }

  salvarProduction(){
    this.production.idProduction ?

      this.productionService.putProduction$(this.production, this.production.idProduction)
      .subscribe(() => this.cancelar()) :

      this.productionService.postProduction$(this.production, this.idPlot)
      .subscribe(() => this.cancelar());
  }

  cancelar(){
    this.router.navigate(['listProduction', this.idPlot, this.idFarm]);
  }

}
