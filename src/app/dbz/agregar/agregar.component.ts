import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input('dataPersonaje') nuevo:Personaje = {nombre:'',poder:0}

  @Output() onNuevoPersonaje : EventEmitter<Personaje>= new EventEmitter();
  agregar():void{ 
    if(this.nuevo.nombre.trim().length === 0){return;}
    this.onNuevoPersonaje.emit(this.nuevo)
    this.nuevo ={ 
      nombre:'',
      poder:0
    }
  }
}
