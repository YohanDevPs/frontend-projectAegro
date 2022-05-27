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
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onEdit(farm: Farm){

  }

  onDelete(farm: Farm){

  }

  onAdd(){
    this.router.navigate(['form'], {relativeTo:this.route})
  }

}
