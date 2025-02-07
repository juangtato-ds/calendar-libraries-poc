import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarJsComponent } from './calendar-js.component';

describe('CalendarJsComponent', () => {
  let component: CalendarJsComponent;
  let fixture: ComponentFixture<CalendarJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarJsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
