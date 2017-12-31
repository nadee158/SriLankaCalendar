import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

}
