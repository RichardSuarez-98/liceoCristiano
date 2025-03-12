import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragonballService } from './dragonball.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'dragonball';
  dragon = inject(DragonballService);

  personaje: any[]=[];

  ngOnInit(): void {
    this.dragon.getCharacters().subscribe((dragonBall:any) =>{
      console.log(dragonBall.items);
      this.personaje=dragonBall.items;
    });
  }


 



}
