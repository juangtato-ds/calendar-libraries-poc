import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';


/**
 * https://fullcalendar.io/demos
 * https://fullcalendar.io/docs/angular
 * https://www.npmjs.com/package/@fullcalendar/angular
 * npm i @fullcalendar/core @fullcalendar/angular @fullcalendar/daygrid @fullcalendar/interaction @fullcalendar/timegrid
 * License: 1 developer	$480 
 * 
 */
@Component({
  selector: 'app-fullcalendar',
  imports: [
    FullCalendarModule
  ],
  templateUrl: './fullcalendar.component.html',
  styleUrl: './fullcalendar.component.scss'
})
export class FullcalendarComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2025-02-10' },
      { title: 'event 2', date: '2025-02-02' }
    ]
  };

  calendar2Options: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2025-02-10' },
      { title: 'event 2', date: '2025-02-02' }
    ],
    weekends: false
  }

  calendar3Options: CalendarOptions = {
    initialView: 'timeGridWeek',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay' // user can switch between the two
    },
    plugins: [timeGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2025-02-05', allDay: true },
      { title: 'event 2', start: '2025-02-03T08:00:00+01:00', editable: true , end: '2025-02-03T11:00:00+01:00'}
    ]
  }

  handleDateClick(arg: any) {
    alert('Click ' + arg.dateStr);
  }

  toggleWeekends() {
    this.calendar2Options.weekends = !this.calendar2Options.weekends // toggle the boolean!
  }

}
