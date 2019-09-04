import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as actions from '../actions/counter.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {

  writeCountByForReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.reset),
      tap(a => localStorage.setItem('by', '1'))
    ), { dispatch: false } // required to stop an infinite loop
  );

  writeCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.setCountBy),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false } // required to stop an infinite loop
  );
  constructor(private actions$: Actions) { }
}
