import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { GeneroDTO } from '../../generos/generos';
import { CinesService } from '../cines.service';
import { CineDTO } from '../cines';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-indice-cine',
  imports: [MatButtonModule,RouterLink,MatTableModule,MatFormFieldModule, MatInputModule],
  templateUrl: './indice-cine.component.html',
  styleUrl: './indice-cine.component.css'
})
export class IndiceCineComponent {
columnasMostrar: string[] = ['Id', 'Nombre', 'Accion'];

  cines= inject(CinesService);
  listacines!: CineDTO[];

  dataSource: any; 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(){
    this.cines.obtenerCines()
                .subscribe(cines =>{
      this.listacines=cines;
      this.dataSource= new MatTableDataSource(this.listacines);
      console.log(this.listacines);
    });
  }

}
