import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITrip } from './Models/ITrip.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TripsServiceService {

  private tripData: BehaviorSubject<ITrip[]> = new BehaviorSubject<ITrip[]>([]);

  public tripDataSource: Observable<ITrip[]> = this.tripData;

  constructor(private http: HttpClient) {
    this.getAllTrips();
  }

  createTrip(newTrip: ITrip) {
    return this.http.post('http://localhost:3000/trips', newTrip).subscribe(data => this.getAllTrips()); 
  }

  getAllTrips() {
    return this.http.get<ITrip[]>('http://localhost:3000/trips').subscribe(trip => this.tripData.next(trip)); 
  }

  deleteTrip(tripToDelete: ITrip) {
    return this.http.delete(`http://localhost:3000/trips/${tripToDelete.id}`).subscribe(data => this.getAllTrips()); 
  }
} 
