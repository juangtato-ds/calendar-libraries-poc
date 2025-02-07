import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanillaCalendarProComponent } from './vanilla-calendar-pro.component';

describe('VanillaCalendarProComponent', () => {
  let component: VanillaCalendarProComponent;
  let fixture: ComponentFixture<VanillaCalendarProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VanillaCalendarProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VanillaCalendarProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
