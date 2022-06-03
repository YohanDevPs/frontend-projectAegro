import { ProductionService } from './../../service/production.service';
import { Production } from './../../model/production-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-production-form',
  templateUrl: './production-form.component.html',
  styleUrls: ['./production-form.component.scss']
})
export class ProductionFormComponent implements OnInit {

  production: Production = new Production();

  idPlot: number
  idProductionForEdit: number;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private productionService: ProductionService,
    private location: Location) { }

  ngOnInit(): void {
      const idProduction = this.route.snapshot.params['idProductionForEdit'];
      this.idProductionForEdit = idProduction;
      if(idProduction) {
        this.productionService.ProductionById(idProduction).subscribe(production => this.production = production)
      }
      this.idPlot = this.route.snapshot.params['idPlot'];
  }

  salvarProduction(){
    this.production.idProduction ?

      this.productionService.putProduction$(this.production, this.production.idProduction)
      .subscribe(() => this.cancelar()) :

      this.productionService.postProduction$(this.production, this.idPlot)
      .subscribe(() => this.cancelar());
      console.log("Este é o montante: ",this.production.amount)
  }

  cancelar(){
    this.location.back();
  }

}
