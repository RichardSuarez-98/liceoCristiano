import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RickService } from './rick.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'rickmorty';
  http = inject(RickService);
  personajes: any[]=[];

  ngOnInit(): void {
    this.http.obtenerRegistros().subscribe((resultado:any)=>{
      console.log(resultado.results);
      this.personajes=resultado.results;
    });
  }



}
