import { FarmServiceService } from './../../service/farm-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Farm } from 'src/app/model/farm-model';

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
    private farmService: FarmServiceService) { }

  ngOnInit(): void {
    this.farmList();
  }

  private farmList(): void{
  this.farmService.listFarms$.subscribe(farms => {
    this.farms = farms;
  });
  }

  onEdit(farm: Farm){
    this.router.navigate(['farms/formFarmEdit', farm.id], {relativeTo:this.route})
  }

  onDelete(farm: Farm){
    this.farmService.delete$(farm.id).subscribe(() => this.farmList())
  }

  onAdd(){
    this.router.navigate(['formFarmCadastro'], {relativeTo:this.route})
  }

  onAddPlot(farm: Farm){
    this.router.navigate(['listPlot', farm.id], {relativeTo:this.route})
  }

}
