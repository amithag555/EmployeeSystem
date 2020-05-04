import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserServiceService } from 'src/app/user/user-service.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/user/Models/IUser.model';
import { TripsServiceService } from '../trips-service.service';
import { ITrip } from '../Models/ITrip.model';

@Component({
  selector: 'app-trips-layout',
  templateUrl: './trips-layout.component.html',
  styleUrls: ['./trips-layout.component.css']
})

export class TripsLayoutComponent implements OnInit {

  showForm: boolean = false;

  constructor(private tripService: TripsServiceService) {
  }

  addNewTrip(newTrip: ITrip) {
    this.tripService.createTrip(newTrip);
    this.showForm = false;
  }

  deleteTrip(tripToDelete: ITrip) {
    this.tripService.deleteTrip(tripToDelete);
  }

  showFormClick() {
    this.showForm = true;
  }

  ngOnInit() {
  }
}
