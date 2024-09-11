import { Component, inject, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { StateLessonService } from '../service/state-lesson.service'
import { StateLessonFacade } from '../state/state-lesson.facade'

@Component({
  selector: 'app-state-lesson',
  templateUrl: './state-lesson.component.html',
  styleUrl: './state-lesson.component.scss'
})
export class StateLessonContainer implements OnInit {
  stateLessonService = inject(StateLessonService);
  stateLessonFacade = inject(StateLessonFacade);

  menu$: Observable<any> = this.stateLessonFacade.menu$;
  isParagraphRed$: Observable<any> = this.stateLessonFacade.isParagraphRed$;

  ngOnInit() {
    console.log('jestem')

    this.stateLessonFacade.getData();

    combineLatest([
      this.menu$,
      this.isParagraphRed$
    ]).subscribe(([menu, isParagraphRed]) => {
      console.log(menu, 'pwqoqwpe')
      console.log(isParagraphRed, 'dlasfkjhsaofjas')
      })
  }

  public makeParagraphRed() {
    this.stateLessonFacade.makeParagraphRed();
  }
}
