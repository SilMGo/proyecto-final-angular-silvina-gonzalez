import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {  Sale } from '../models';

export const InscActions = createActionGroup({
  source: 'Insc',
  events: {
    'Load Inscs': emptyProps(),
    'Load Inscs Success': props<{ data: Sale[] }>(),
    'Load Inscs Failure': props<{ error: unknown }>(),
  }
});
