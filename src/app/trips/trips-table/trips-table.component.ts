import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ITrip } from '../Models/ITrip.model';
import { TripsServiceService } from '../trips-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-trips-table',
  templateUrl: './trips-table.component.html',
  styleUrls: ['./trips-table.component.css']
})

export class TripsTableComponent implements OnInit {

  @Output()
  tripToDelete = new EventEmitter<ITrip>();

  @Output()
  showFormEvent: EventEmitter<any> = new EventEmitter<any>();

  columnsToDisplay: string[];

  dataSource: MatTableDataSource<ITrip>;

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  constructor(public tripsService: TripsServiceService) {
    this.columnsToDisplay = ['destination', 'startDate', 'endDate', 'totalDays', 'travelers', 'actions'];
  }

  deleteTrip(deleteTrip: ITrip) {
    this.tripToDelete.emit(deleteTrip);
  }

  showFormClick() {
    this.showFormEvent.emit();
  }

  loadData() {
    this.tripsService.tripDataSource.subscribe(returnedData => {
      if (!returnedData)
        return
      this.dataSource = new MatTableDataSource(returnedData);
      this.dataSource.paginator = this.paginator;
    }); 
  }

  ngOnInit() {
    this.loadData();
  }
}
