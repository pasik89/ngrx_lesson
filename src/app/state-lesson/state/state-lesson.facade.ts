import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { LessonState } from '../state/state-lesson.state'
import { selectMenu, selectIsParagraphRed } from '../state/state-lesson.selectors'
import * as actions from '../state/state-lesson.actions'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StateLessonFacade {
  store$ = inject(Store<LessonState>);

  menu$: Observable<any> = this.store$.select(selectMenu)
  isParagraphRed$: Observable<any> = this.store$.select(selectIsParagraphRed)

  public getData() {
    this.store$.dispatch(actions.getData())
  }

  public makeParagraphRed() {
    this.store$.dispatch(actions.makeParagraphRed())
  }
}
