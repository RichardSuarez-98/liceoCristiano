import { inject, Injectable } from '@angular/core';
import { GeneroDTO } from './generos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {
   private http = inject(HttpClient);
  constructor() { }

  public obtenerGeneros(): Observable<GeneroDTO[]>{
    return this.http.get<GeneroDTO[]>("http://apicodersnet.runasp.net/api/Generos");
  }

 /* public obtenerTodos() : GeneroDTO[]{
    return [
      {id:1, nombre:'Drama'},
      {id:2, nombre:'Ficcion'},
      {id:3, nombre:'Comedia'}
    ];
  }*/

}
