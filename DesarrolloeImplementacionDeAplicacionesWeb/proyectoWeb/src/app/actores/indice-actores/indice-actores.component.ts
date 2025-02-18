import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ActoresService } from '../actores.service';
import { ActorDTO } from '../actores';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-indice-actores',
  imports: [MatButtonModule,RouterLink,MatTableModule,MatFormFieldModule, MatInputModule],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent {
columnasMostrar: string[] = ['Id', 'Nombre','fechaNacimiento','Foto', 'Accion'];

  actor= inject(ActoresService);
  listaActor!: ActorDTO[];

  dataSource: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(){
    this.actor.obtenerActores()
                .subscribe(actor =>{
      this.listaActor=actor;
      this.dataSource = new MatTableDataSource(this.listaActor);
      console.log(this.listaActor);
    });
  }




}
