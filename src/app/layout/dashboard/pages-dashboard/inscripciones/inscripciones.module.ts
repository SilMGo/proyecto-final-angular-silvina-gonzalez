import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { EffectsModule } from '@ngrx/effects';
import { InscEffects } from './store/insc.effects';
import { inscFeature } from './store/insc.reducer';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../../../shared/shared.module';
import { InscripcionesDialogComponent } from './components/inscripciones-dialog/inscripciones-dialog.component';



@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesDialogComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    StoreModule.forFeature(inscFeature),
    EffectsModule.forFeature([InscEffects]),
    SharedModule

  ]
})
export class InscripcionesModule { }
