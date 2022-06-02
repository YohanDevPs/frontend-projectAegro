import { Plot } from './../model/plot-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlotServiceService {

  constructor(private httpClient: HttpClient) {
  }

  plotById(id:number): Observable<Plot>{
    return this.httpClient.get<Plot>(`${environment.API_PATH}plot/${id}`);
  }

  postPlot$(plot: Plot, idFarm:number): Observable<Plot> {
    return this.httpClient.post<Plot>(`${environment.API_PATH}plot/${idFarm}/farmid`, plot);
  }

  get allPlots$(): Observable<Array<Plot>>{
    return this.httpClient.get<Array<Plot>>(`${environment.API_PATH}plot`);
  }

  listPlotByIdFarm$(idFarm:number): Observable<Array<Plot>> {
    return this.httpClient.get<Array<Plot>>(`${environment.API_PATH}plot/${idFarm}/farmid`);
  }

  putPlot$(idPlot:number, plot: Plot): Observable<Plot>{
    return this.httpClient.put<Plot>(`${environment.API_PATH}plot/${idPlot}`, plot);
  }

  delete$(idPlot:number): Observable<Plot>{
    return this.httpClient.delete<Plot>(`${environment.API_PATH}plot/${idPlot}`);
  }

}
