import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { IUser } from '../Models/IUser.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})

export class UserLayoutComponent implements OnInit {

  showForm: boolean = false;
  tempUser: IUser;

  constructor(private userService: UserServiceService) { }

  addUser(newUser: IUser) {
    this.showForm = false;
    this.userService.createUser(newUser);
  }

  deleteUser(userToDelete: IUser) {
    this.userService.deleteUser(userToDelete);
  }

  openFormToEdit(userToEdit: IUser) {
    this.showForm = true;
    this.tempUser = userToEdit;
  }

  showFormClick(): void {
    this.showForm = true;
  }

  updateUser(updateUser: IUser) {
    this.showForm = false;
    this.userService.updateUser(updateUser);
    this.tempUser = null;
  }

  ngOnInit() {
  }
}
