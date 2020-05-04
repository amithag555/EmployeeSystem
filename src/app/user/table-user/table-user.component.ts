import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../Models/IUser.model';
import { UserServiceService } from '../user-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})

export class TableUserComponent implements OnInit {

  @Output()
  userToEdit: EventEmitter<IUser> = new EventEmitter<IUser>();

  @Output()
  deleteUser: EventEmitter<IUser> = new EventEmitter<IUser>();

  @Output()
  showFormEvent: EventEmitter<any> = new EventEmitter<any>();

  columnsToDisplay: string[];

  dataSource: MatTableDataSource<IUser>;

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  constructor(public userService: UserServiceService) {
    this.columnsToDisplay = ['firstName', 'lastName', 'department', 'actions'];
  }

  deleteUserBtn(userToDelete: IUser) {
    this.deleteUser.emit(userToDelete);
  }

  updeteUserBtn(userToEdit: IUser) {
    this.userToEdit.emit(userToEdit);
  }

  showFormClick() {
    this.showFormEvent.emit();
  }

  loadData() {
    this.userService.userDataSource.subscribe(returnedData => {
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
