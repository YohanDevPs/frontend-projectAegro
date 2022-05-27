import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farm } from 'src/app/model/farm-model';

@Component({
  selector: 'app-farm-form',
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.scss']
})
export class FarmFormComponent implements OnInit {

  farm: Farm = new Farm();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salvar(){

  }

  cancelar(){
      this.router.navigate(['farms'])
  }

}
