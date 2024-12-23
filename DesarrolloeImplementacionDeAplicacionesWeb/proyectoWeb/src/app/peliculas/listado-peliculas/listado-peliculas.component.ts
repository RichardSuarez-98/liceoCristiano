import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {

  @Input({required: true}) listadPeliculas: any=[];

  agregarPelicula(){
    this.listadPeliculas.push({
      titulo: 'Piratas del caribe 8',
      fechaLanzamiento: new Date('2029-03-02'),
      precio: 147.62,
      poster: ''
    });
  }

  removerPelicula(pelicula: any){
    const indice = this.listadPeliculas.findIndex((peliculaActual:any)=> peliculaActual.titulo === pelicula.titulo);
    this.listadPeliculas.splice(indice,1);
  }

}
