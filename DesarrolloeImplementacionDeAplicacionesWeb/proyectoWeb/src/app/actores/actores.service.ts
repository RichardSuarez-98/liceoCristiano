import { inject, Injectable } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from './actores';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

   private http = inject(HttpClient);
   private urlBase="http://apicodersnet.runasp.net/api/actores";

    constructor() { }
  
    public obtenerActores(): Observable<ActorDTO[]>{
      return this.http.get<ActorDTO[]>("http://apicodersnet.runasp.net/api/actores");
    }

    public crearGeneros(actor: ActorCreacionDTO){
      const formData = new FormData();
      // Añadir los datos al FormData
    formData.append('nombre', actor.nombre);
    formData.append('fechaNacimiento', actor.fechaNacimiento.toISOString().split('T')[0]); // Enviar la fecha en el formato correcto (yyyy-MM-dd)
    if (actor.foto) {
      formData.append('foto', actor.foto, actor.foto.name); // Asegúrate de enviar el archivo correctamente
    }
         return this.http.post(this.urlBase,formData);
    }
  
}
