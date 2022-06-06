import { Farm } from '../model/farm-model';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FarmService {

  constructor(private httpClient: HttpClient) {
  }

  farmById(id:number): Observable<Farm>{
    return this.httpClient.get<Farm>(`${environment.API_PATH}farm/${id}`);
  }

  get listFarms$(): Observable<Array<Farm>>{
    return this.httpClient.get<Array<Farm>>(`${environment.API_PATH}farm`);
  }

  post$(farm?: Farm): Observable<Farm> {
    return this.httpClient.post<Farm>(`${environment.API_PATH}farm`, farm);
  }

  put$(id:number, farm:Farm): Observable<Farm>{
    return this.httpClient.put<Farm>(`${environment.API_PATH}farm/${farm.id}`, farm);
  }

  delete$(id:number): Observable<Farm>{
    return this.httpClient.delete<Farm>(`${environment.API_PATH}farm/${id}`);
  }

}
