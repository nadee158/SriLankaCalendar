import { NgModule } from '@angular/core';
import { CalendarHeaderComponent } from './calendar-header/calendar-header';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import {
	NgbDatepickerModule,
	NgbTimepickerModule
  } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [CalendarHeaderComponent, DateTimePickerComponent],
	imports: [
		CommonModule,
    	FormsModule,
    	NgbDatepickerModule.forRoot(),
    	NgbTimepickerModule.forRoot(),
    	CalendarModule
	],
	exports: [CalendarHeaderComponent, DateTimePickerComponent]
})
export class ComponentsModule {}
