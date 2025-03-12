import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  constructor() { }
  
  private url ="https://dragonball-api.com/api/characters";
  private http = inject(HttpClient);


  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  
}
