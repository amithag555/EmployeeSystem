import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/user/user-service.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/user/Models/IUser.model';
import { ITrip } from '../Models/ITrip.model';
import * as moment from 'moment';

@Component({
  selector: 'app-trips-form',
  templateUrl: './trips-form.component.html',
  styleUrls: ['./trips-form.component.css']
})

export class TripsFormComponent implements OnInit {

  userArr$: Observable<IUser[]>;
  startDay: Date;
  endDay: Date;
  totalDays: number;

  tripsFormGroup = new FormGroup({
    id: new FormControl(''),
    destination: new FormControl('', [Validators.required]),
    startDate: new FormControl(new Date(), [this.startDateValidation]),
    endDate: new FormControl(new Date()),
    totalDays: new FormControl(''),
    travelers: new FormControl('', [Validators.required])
  }, { validators: this.dateValidation });

  @Output()
  newTrip = new EventEmitter<ITrip>();

  constructor(userService: UserServiceService) {
    this.userArr$ = userService.userDataSource;
  }

  createNewTrip() {
    this.startDay = new Date(this.tripsFormGroup.get('startDate').value);
    this.endDay = new Date(this.tripsFormGroup.get('endDate').value);

    this.totalDays = Math.abs(moment(this.startDay).diff(moment(this.endDay), 'days'));
    this.tripsFormGroup.get('totalDays').setValue(this.totalDays);

    this.newTrip.emit({ ...this.tripsFormGroup.value });
  }

  dateValidation(formGroup: FormGroup) {
    let startDay = new Date(formGroup.get('startDate').value); 
    let endDay = new Date(formGroup.get('endDate').value);

    if (startDay <= endDay) {
      formGroup.controls.endDate.setErrors(null);
    }
    else {
      formGroup.controls.endDate.setErrors({ 
        startShouldBeSmallerThenEnd: true
      });

      return {
        startShouldBeSmallerThenEnd: true 
      }
    }
  }

  startDateValidation(formControl: FormControl) {
    if (formControl.dirty) {
      let startDay = new Date(formControl.value);

      if (startDay > new Date()) {
        return null;
      }
      return {
        startShouldBeBiggestThenNow: true
      }
    }
  }

  ngOnInit() {
  }
}
