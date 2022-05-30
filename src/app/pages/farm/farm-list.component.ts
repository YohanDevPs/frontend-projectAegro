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

  farms: Array<Farm> = new  Array<Farm>();
  displayedColumns: string[] = ['id', 'nameFarm',  'productivityFarm', 'action']

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

  }

  onDelete(farm: Farm){

  }

  onAdd(){
    this.router.navigate(['form'], {relativeTo:this.route})
  }

}
