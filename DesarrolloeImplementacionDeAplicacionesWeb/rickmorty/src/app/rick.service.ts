import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickService {

  constructor() { }
  private http = inject(HttpClient);
  private url ="https://rickandmortyapi.com/api/character";


  obtenerRegistros():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

}
