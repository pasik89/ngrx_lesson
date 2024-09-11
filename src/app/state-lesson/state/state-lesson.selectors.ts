import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LessonState } from './state-lesson.state';

export const selectLessonFeature = createFeatureSelector('lesson');

export const selectMenu = createSelector(
  selectLessonFeature,
  (state: LessonState) => state.menu
)

export const selectIsParagraphRed = createSelector(
  selectLessonFeature,
  (state: LessonState) => state.isParagraphRed
)
