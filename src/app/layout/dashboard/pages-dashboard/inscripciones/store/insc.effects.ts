import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscActions } from './insc.actions';
import { InscripcionesService } from '../inscripciones.service';
import { AlumnosService } from '../../alumnos-users/alumnos-users.service';


@Injectable()
export class InscEffects {
//efecto de carga de inscripciones
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
// Efecto de carga de usuarios/alumn
  loadAlumnos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscActions.loadAlumnos),
      concatMap(() =>
        this.alumnosService.getAllBuyers().pipe(
          map((resp) => InscActions.loadAlumnosSuccess({ data: resp })),
          catchError((error) => {
            return of(InscActions.loadAlumnosFailure({ error }));
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions, 
    private inscripcionesService: InscripcionesService,
    private alumnosService:AlumnosService 
    ) {}
}
