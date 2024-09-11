import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs'
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { StateLessonService } from '../service/state-lesson.service'
import * as action from './state-lesson.actions'

@Injectable()
export class LessonEffects {
  getData$ = createEffect(() => this.actions$.pipe(
    ofType(action.getData),
    switchMap(() => this._stateLessonService.getData().pipe(
        map((data: any) => action.getDataSuccess({ payload: { menu: data.menu } })),
        catchError((err) => of(action.getDataFailed())
      ))
    )
  ));

  getDataSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(action.getDataSuccess),
    tap(({ payload }) => { console.log(payload) })
  ), { dispatch: false });

  constructor(
    private _stateLessonService: StateLessonService,
    private actions$: Actions,
  ) {}
}
