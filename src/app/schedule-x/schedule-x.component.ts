import { Component } from '@angular/core';
import { CalendarComponent } from "@schedule-x/angular";
import { createCalendar, createViewWeek } from "@schedule-x/calendar";
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop';
import { createResizePlugin } from '@schedule-x/resize';

/**
 * npm install @schedule-x/angular @schedule-x/calendar @schedule-x/theme-default
 * npm i @schedule-x/drag-and-drop
 * npm i @schedule-x/resize
 * https://schedule-x.dev/docs/frameworks/angular
 * https://schedule-x.dev/docs/calendar/events
 * https://schedule-x.dev/docs/calendar/configuration
 */

@Component({
  selector: 'app-schedule-x',
  imports: [
    CalendarComponent
  ],
  templateUrl: './schedule-x.component.html',
  styleUrl: './schedule-x.component.scss'
})
export class ScheduleXComponent {

  calendarApp = createCalendar({
    calendars: {
      personal: {
        colorName: 'personal',
        lightColors: {
          main: '#f9d71c',
          container: '#fff5aa',
          onContainer: '#594800',
        },
        darkColors: {
          main: '#fff5c0',
          onContainer: '#fff5de',
          container: '#a29742',
        },
      },
      work: {
        colorName: 'work',
        lightColors: {
          main: '#f91c45',
          container: '#ffd2dc',
          onContainer: '#59000d',
        },
        darkColors: {
          main: '#ffc0cc',
          onContainer: '#ffdee6',
          container: '#a24258',
        },
      }
    },
    events: [
      {
        id: '1',
        title: 'Event 1',
        calendarId: 'personal',
        start: '2025-02-06 03:00',
        end: '2025-02-06 05:00',
        people: ['john doe']
      },
      {
        id: '14',
        title: 'Work event',
        calendarId: 'work',
        start: '2025-02-07 03:00',
        end: '2025-02-07 05:00',
        people: ['john doe']
      },
    ],
    views: [createViewWeek()],
  });

  calendar2App = createCalendar(
    {
      events: [
        {
          id: '2',
          title: 'Event 1',
          start: '2025-02-06 03:00',
          end: '2025-02-06 05:00',
          people: ['john doe']
        },
      ],
      views: [createViewWeek()],
      callbacks: {
        /**
         * Is called when:
         * 1. Selecting a date in the date picker
         * 2. Selecting a new view
         * */
        onRangeUpdate(range) {
          console.log('new calendar range start date', range.start)
          console.log('new calendar range end date', range.end)
        },
     
        /**
         * Is called when an event is updated through drag and drop
         * */
        onEventUpdate(updatedEvent) {
          console.log('onEventUpdate', updatedEvent)
        },
     
        /**
        * Is called before an event is updated by drag & drop or resizing.
        * If you return false, the update will be aborted,
        * and the event will be reset to its original position.
        * If you return true, the event will be updated.
        * */
        onBeforeEventUpdate(oldEvent, newEvent, $app) {
          // run your validation or side effects
          console.log(oldEvent);
          console.log(newEvent);
          return true
        },
     
        /**
         * Is called when an event is clicked
         * */
        onEventClick(calendarEvent) {
          console.log('onEventClick', calendarEvent)
        },
     
        /**
         * Is called when an event is double clicked
         * */
        onDoubleClickEvent(calendarEvent) {
          console.log('onDoubleClickEvent', calendarEvent)
        },
     
        /**
         * Is called when clicking a date in the month grid
         * */
        onClickDate(date) {
          console.log('onClickDate', date) // e.g. 2024-01-01
        },
     
        /**
         * Is called when clicking somewhere in the time grid of a week or day view
         * */
        onClickDateTime(dateTime) {
          console.log('onClickDateTime', dateTime) // e.g. 2024-01-01 12:37
        },
     
        /**
         * Is called when selecting a day in the month agenda
         * */
        onClickAgendaDate(date) {
          console.log('onClickAgendaDate', date) // e.g. 2024-01-01
        },
     
        /**
         * Is called when double clicking a day in the month agenda
         * */
        onDoubleClickAgendaDate(date) {
          console.log('onDoubleClickAgendaDate', date) // e.g. 2024-01-01
        },
     
        /**
         * Is called when double clicking a date in the month grid
         * */
        onDoubleClickDate(date) {
          console.log('onClickDate', date) // e.g. 2024-01-01
        },
     
        /**
         * Is called when double clicking somewhere in the time grid of a week or day view
         * */
        onDoubleClickDateTime(dateTime) {
          console.log('onDoubleClickDateTime', dateTime) // e.g. 2024-01-01 12:37
        },
     
        /**
         * Is called when clicking the "+ N events" button of a month grid-day
         * */
        onClickPlusEvents(date) {
          console.log('onClickPlusEvents', date) // e.g. 2024-01-01
        },
     
        /**
         * Is called when the selected date is updated
         * */
        onSelectedDateUpdate(date) {
          console.log('onSelectedDateUpdate', date)
        },
     
        /**
         * Runs on resizing the calendar, to decide if the calendar should be small or not.
         * This in turn affects what views are rendered.
         * */
        isCalendarSmall($app) {
          return $app.elements.calendarWrapper?.clientWidth! < 500
        },
     
        /**
         * Runs before the calendar is rendered
         * */
        beforeRender($app) {
          const range = $app.calendarState.range.value
          console.log(range);
        },
     
        /**
         * Runs after the calendar is rendered
         * */
        onRender($app) {
          console.log('onRender', $app)
        },
      },
    },
    [
      createDragAndDropPlugin(),
      createResizePlugin(15) // 15 min
    ]
  );

}
