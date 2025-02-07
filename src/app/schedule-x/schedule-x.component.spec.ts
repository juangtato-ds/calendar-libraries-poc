import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleXComponent } from './schedule-x.component';

describe('ScheduleXComponent', () => {
  let component: ScheduleXComponent;
  let fixture: ComponentFixture<ScheduleXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleXComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
