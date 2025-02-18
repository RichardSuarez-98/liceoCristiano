import { Component, inject } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActorCreacionDTO } from '../actores';
import { Router } from '@angular/router';
import { ActoresService } from '../actores.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-actor',
  imports: [FormularioActoresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {

  private router = inject(Router);
  private actorService = inject(ActoresService);
  private _snackBar = inject(MatSnackBar);
  
 
 guardarCambios(actor: ActorCreacionDTO){
  console.log("creando el actor",actor);
  this.actorService.crearGeneros(actor).subscribe({
      next: (genero) =>{
         this.router.navigate(['/actores']);
         this.openSnackBar("Se guardo con exito el registro de actor");
      },
      error: (error:HttpErrorResponse) => {
        // Manejar el error 404 aquí
        if (error.error === 404) {
          
          this.openSnackBar("El género no fue encontrado")
        } else {
         this.openSnackBar('Ocurrió un error desconocido');
        }
      }
    });
    //console.log(this.form.value);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "",{
      duration: 4 * 1000,
    });
  }


}
