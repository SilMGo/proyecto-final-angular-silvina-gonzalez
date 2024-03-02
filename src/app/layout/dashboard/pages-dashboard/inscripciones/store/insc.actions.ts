import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {  Sale } from '../models';
import { User } from '../../alumnos-users/models';


export const InscActions = createActionGroup({
  source: 'Insc',
  events: {
  //Accion de carga de inscripciones
    'Load Inscs': emptyProps(),
    'Load Inscs Success': props<{ data: Sale[] }>(),
    'Load Inscs Failure': props<{ error: unknown }>(),
  //Accion de carga de usuarios/alumn
  'Load Alumnos': emptyProps(),
    'Load Alumnos Success': props<{ data: User[] }>(),
    'Load Alumnos Failure': props<{ error: unknown }>(),
  },
});
