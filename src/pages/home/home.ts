import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  CalendarEvent,
  CalendarDateFormatter,
  DAYS_OF_WEEK
} from 'angular-calendar';
import { NavController } from 'ionic-angular';
import { CustomDateFormatter } from '../../common/custom-date-formatter.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  locale: string = 'ta-IN';

  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  weekendDays: number[] = [DAYS_OF_WEEK.SATURDAY, DAYS_OF_WEEK.SUNDAY];

}
