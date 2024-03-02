import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscActions } from './insc.actions';
import { InscripcionesService } from '../inscripciones.service';


@Injectable()
export class InscEffects {

  loadInscs$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InscActions.loadInscs),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.inscripcionesService.getInscripciones().pipe(
          map(data => InscActions.loadInscsSuccess({ data })),
          catchError(error => of(InscActions.loadInscsFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private inscripcionesService: InscripcionesService) {}
}
