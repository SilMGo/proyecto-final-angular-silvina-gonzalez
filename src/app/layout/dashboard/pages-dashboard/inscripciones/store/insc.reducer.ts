import { createFeature, createReducer, on } from '@ngrx/store';
import { InscActions } from './insc.actions';
import { User } from '../../alumnos-users/models';
import { Curso } from '../../cursos-products/models';
import { Sale } from '../models';

export const inscFeatureKey = 'insc';

export interface State {
  sales: Sale[];
  //buyers: User[];
  //cursos: Curso[];
  loading: boolean;
  //loadingBuyers: boolean;
  error: unknown;
}

export const initialState: State = {
  sales:[],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(InscActions.loadInscs, state => ({ ...state, loading: true})),
  on(InscActions.loadInscsSuccess, (state, action) => ({...state, loading: false, inscriptions: action.data })),
  on(InscActions.loadInscsFailure, (state, action) => ({...state, loading: false, error: action.error}) ),
);

export const inscFeature = createFeature({
  name: inscFeatureKey,
  reducer,
});

