import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalendarEvent} from 'angular-calendar';
import { addDays, addHours, startOfDay } from 'date-fns';
import { colors } from '../../common/constants';

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'week-view.html',
})
export class WeekViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  viewDate: Date = new Date();

  public events: CalendarEvent[] = [
    {
      start: addHours(startOfDay(new Date()), 5),
      end: addHours(startOfDay(new Date()), 17),
      title: 'Event 1',
      color: colors.red
    },
    {
      start: addHours(startOfDay(addDays(new Date(), 1)), 2),
      end: addHours(startOfDay(addDays(new Date(), 1)), 18),
      title: 'Event 2',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 8),
      title: 'Event 3',
      color: colors.blue
    }
  ];

}
