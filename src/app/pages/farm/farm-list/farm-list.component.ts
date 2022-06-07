import { Farm } from 'src/app/model/farm-model';
import { FarmService } from '../../../service/farm-service.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.scss']
})
export class FarmListComponent implements OnInit {

  farms: Array<Farm> = [];
  displayedColumns: string[] = ['home', 'nameFarm', 'action']

  constructor(private router: Router,
    private route:ActivatedRoute,
    private farmService: FarmService) { }

  ngOnInit(): void {
    this.farmList();
  }

  private farmList(): void{
  this.farmService.listFarms$.subscribe(farms => {
    this.farms = farms;
  });
  }

  addNewFarm(){
    this.router.navigate(['farmform-cadastro'])
  }

  editFarm(farm: Farm){
    this.router.navigate(['farmform-edit', farm.id])
  }

  deleteFarm(farm: Farm){
    this.farmService.delete$(farm.id).subscribe(() => this.farmList())
  }

  addPlotInFarm(farm: Farm){
    this.router.navigate(['listPlot', farm.id])
  }

}
