import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule,RouterLink],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  router = inject(Router);

  guardarCambios(){
    this.router.navigate(['/generos']);
  }


}
