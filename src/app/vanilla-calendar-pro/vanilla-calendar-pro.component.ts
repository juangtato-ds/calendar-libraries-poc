import { Component, effect, ElementRef, viewChild } from '@angular/core';
import { Calendar, type Options } from 'vanilla-calendar-pro';


/**
 * https://vanilla-calendar.pro/
 * npm i vanilla-calendar-pro
 */

@Component({
  selector: 'app-vanilla-calendar-pro',
  imports: [],
  templateUrl: './vanilla-calendar-pro.component.html',
  styleUrl: './vanilla-calendar-pro.component.scss'
})
export class VanillaCalendarProComponent {
  private calendarElement = viewChild<ElementRef<HTMLDivElement>>('calendar');
  private instance?: Calendar;
  private options: Options = {
    enableWeekNumbers: true
  };
  
  constructor() {
    effect(() => {
      const ref = this.calendarElement();
      if (ref) {
        this.launchCalendar(ref.nativeElement);
      }
    });
  }

  private launchCalendar(calendar: HTMLDivElement): void {
    this.instance = new Calendar(calendar, this.options);
    this.instance.init();
    console.log(this.instance);
  }

}
