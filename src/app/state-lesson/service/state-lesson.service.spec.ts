import { TestBed } from '@angular/core/testing';

import { StateLessonService } from './state-lesson.service';

describe('StateLessonService', () => {
  let service: StateLessonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateLessonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
