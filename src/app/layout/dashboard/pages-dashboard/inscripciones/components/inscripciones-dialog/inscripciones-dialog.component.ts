import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscActions } from '../../store/insc.actions';

@Component({
  selector: 'app-inscripciones-dialog',
  templateUrl: './inscripciones-dialog.component.html',
  styleUrl: './inscripciones-dialog.component.scss'
})
export class InscripcionesDialogComponent {



  constructor (private store: Store){
    this.store.dispatch(InscActions.loadAlumnos ())
  }




}
