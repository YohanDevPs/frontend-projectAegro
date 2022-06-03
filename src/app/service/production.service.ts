import { Production } from './../model/production-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  constructor(private httpClient: HttpClient) { }

  productionById(idProduction:number): Observable<Production>{
    return this.httpClient.get<Production>(`${environment.API_PATH}production/${idProduction}`);
  }

  postProduction$(production: Production, idPlot:number): Observable<Production> {
    return this.httpClient.post<Production>(`${environment.API_PATH}production/${idPlot}/plot`, production);
  }

  get allProductions$(): Observable<Array<Production>>{
    return this.httpClient.get<Array<Production>>(`${environment.API_PATH}production`);
  }

  listProductionByIdPlot$(idPlot:number): Observable<Array<Production>> {
    return this.httpClient.get<Array<Production>>(`${environment.API_PATH}production/${idPlot}/idplot`);
  }

  putProduction$(production: Production, idProduction:number): Observable<Production>{
    return this.httpClient.put<Production>(`${environment.API_PATH}production/${idProduction}`, production);
  }

  deleteProduction$(idProduction:number): Observable<Production>{
    return this.httpClient.delete<Production>(`${environment.API_PATH}production/${idProduction}`);
  }
}
