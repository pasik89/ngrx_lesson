import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateLessonComponent } from './state-lesson.component';

describe('StateLessonComponent', () => {
  let component: StateLessonComponent;
  let fixture: ComponentFixture<StateLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StateLessonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
