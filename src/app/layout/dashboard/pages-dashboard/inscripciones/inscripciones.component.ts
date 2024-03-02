import { Component, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { InscActions } from './store/insc.actions';
import { selectInscripIsLoading, selectInscripciones } from './store/insc.selectors';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import {  Sale } from './models';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent  implements OnDestroy{

 
  sales$: any;

  sales: Sale[] = [];

  isLoading$: Observable<boolean>;

  salesSubscripion?: Subscription;

  destroyed$ = new Subject();

  constructor(private store: Store, ) { 
     
     //this.sales$ = this.store.select(selectSales);

    //lo q ocurra con las inscripciones se actualiza aca
     this.salesSubscripion= this.store.select (selectInscripciones)
     .pipe(takeUntil(this.destroyed$))
     .subscribe ({
      next: (sales)=>{
        console.log('sales');
        console.log('hola');
        this.sales= sales;
     }
    })
    this.isLoading$ = this.store.select(selectInscripIsLoading);
  this.store.dispatch(InscActions.loadInscs());
  }

  ngOnDestroy(): void {
    console.log('se destruyo inscripcionesComponent');
    this.destroyed$.next(true);
    this.destroyed$.complete()
  }
 
  }

 