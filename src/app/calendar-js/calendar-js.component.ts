import { Component, effect, ElementRef, viewChild } from '@angular/core';

const event1 = {
  from: new Date(),
  to: new Date(),
  title: "New Event 1",
  description: "A description of the new event"
};
const event2 = {
  from: new Date(),
  to: new Date(),
  title: "New Event 2",
  description: "A description of the new event"
};

/**
 * https://github.com/williamtroup/Calendar.js
 * npm install jcalendar.js
 */

@Component({
  selector: 'app-calendar-js',
  imports: [],
  templateUrl: './calendar-js.component.html',
  styleUrl: './calendar-js.component.scss'
})
export class CalendarJsComponent {

  private calendar1 = viewChild<ElementRef<HTMLDivElement>>('calendar1');
  private calendar2 = viewChild<ElementRef<HTMLDivElement>>('calendar2');
  private instance1: any;
  private instance2: any;

  constructor() {

    effect(() => {
      const calendar1 = this.calendar1()?.nativeElement;
      if (calendar1) {
        this.instance1 = new calendarJs("calendar1", {
          exportEventsEnabled: true,
          useAmPmForTimeDisplays: true
        });
        this.instance1.addEvent(event1);
      }
    });

    effect(() => {
      const calendar2 = this.calendar2()?.nativeElement;
      if (calendar2) {
        this.instance2 = new calendarJs("calendar2", {
          exportEventsEnabled: false,
        });
        this.instance2.addEvent(event2);
      }
    });
  }

}
