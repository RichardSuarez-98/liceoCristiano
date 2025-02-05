import { inject, Injectable } from '@angular/core';
import { GeneroDTO } from './generos';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { construirQueryParams } from '../compartidos/componentes/funciones/construirQueryParams';
import { paginacionDTO } from '../compartidos/modelos/paginacionDTO';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {
   private http = inject(HttpClient);
  constructor() { }

  public obtenerGenerosPaginacion(paginacion: paginacionDTO): 
                                  Observable<HttpResponse<GeneroDTO[]>>{
    let queryparams = construirQueryParams(paginacion);
    return this.http.get<GeneroDTO[]>("http://apicodersnet.runasp.net/api/Generos"
      ,{params:queryparams, observe:'response'}
    );
  }

  /*public obtenerGeneros(): Observable<GeneroDTO[]>{
    return this.http.get<GeneroDTO[]>("http://apicodersnet.runasp.net/api/Generos");
  }*/

}
