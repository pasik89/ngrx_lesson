import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StateLessonContainer } from './container/state-lesson.component';
import { lessonReducer } from './state/state-lesson.reducer';
import { LessonEffects } from './state/state-lesson.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [
  {
    path: '',
    component: StateLessonContainer,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('lesson', lessonReducer),
    EffectsModule.forFeature([LessonEffects])
  ],
  exports: [RouterModule],
  declarations: [
    StateLessonContainer
  ],
})
export class StateLessonModule {}
