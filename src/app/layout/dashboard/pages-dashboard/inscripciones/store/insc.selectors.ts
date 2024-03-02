import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInsc from './insc.reducer';
import { state } from '@angular/animations';

export const selectInscState = createFeatureSelector<fromInsc.State>(
  fromInsc.inscFeatureKey
);
export const selectInscripciones =createSelector 
(selectInscState, 
  (state) => state.sales)

export const selectInscripIsLoading= createSelector
(selectInscState,
  (state) => state.loading);