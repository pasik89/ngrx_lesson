import { createAction, props } from '@ngrx/store';

export const getData = createAction('[State Lesson] Get data');

export const getDataSuccess = createAction('[State Lesson] Get data success', props<{ payload: { menu: { name: string; url: string; } } }>());

export const getDataFailed = createAction('[State Lesson] Get data failed');

export const makeParagraphRed = createAction('[State Lesson] Make Paragraph red');
