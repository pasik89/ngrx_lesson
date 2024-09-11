import { createReducer, on } from '@ngrx/store';
import { initState, LessonState } from './state-lesson.state';
import * as action from './state-lesson.actions'

export const lessonReducer = createReducer<LessonState>(
  initState,
  on(action.getDataSuccess, (state, { payload }) => {

    return {
      ...state,
      menu: payload.menu
    }
  }),
  on(action.makeParagraphRed, (state) => {

    return {
      ...state,
      isParagraphRed: true
    }
  })
);
