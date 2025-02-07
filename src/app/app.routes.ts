import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'fullcalendar',
        loadComponent: () => import('./fullcalendar/fullcalendar.component').then(c => c.FullcalendarComponent),
        title: 'Full Calendar'
    },
    {
        path: 'vanilla-calendar-pro',
        loadComponent: () => import('./vanilla-calendar-pro/vanilla-calendar-pro.component').then(c => c.VanillaCalendarProComponent),
        title: 'Vanilla calendar pro'
    },
    {
        path: 'schedule-x',
        loadComponent: () => import('./schedule-x/schedule-x.component').then(c => c.ScheduleXComponent),
        title: 'Schedule-X'
    },
    {
        path: 'calendar-js',
        loadComponent: () => import('./calendar-js/calendar-js.component').then(c => c.CalendarJsComponent),
        title: 'Calendar JS'
    },
    {
        path: 'tuicalendar',
        loadComponent: () => import('./tui-calendar/tui-calendar.component').then(c => c.TuiCalendarComponent),
        title: 'Tui Calendar'
    },
    {
        path: 'datepickers',
        loadComponent: () => import('./datepickers/datepickers.component').then(c => c.DatepickersComponent),
        title: 'General: date pickers'
    }
];
