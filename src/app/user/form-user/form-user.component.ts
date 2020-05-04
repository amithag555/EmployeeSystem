import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../Models/IUser.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})

export class FormUserComponent implements OnInit {

  isEditMode = false;
  tempUser: IUser;

  @Output()
  newUser: EventEmitter<IUser> = new EventEmitter<IUser>();

  @Input()
  set userToEdit(valu: IUser) { 
    if (valu) {
      this.isEditMode = true;

      this.userFormGroup.patchValue({
        id: valu.id,
        firstName: valu.firstName,
        lastName: valu.lastName,
        gender: valu.gender,
        department: valu.department,
        address: valu.address,
        birthdate: valu.birthdate
      });
    }
  }

  @Output()
  updateUser = new EventEmitter();

  userFormGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', Validators.required),
    gender: new FormControl(''),
    department: new FormControl(''),
    address: new FormControl(''),
    birthdate: new FormControl(new Date())
  });

  constructor() {
  }

  save() {
    if (this.userFormGroup.valid) {
      if (!this.isEditMode) {
        this.newUser.emit({ ...this.userFormGroup.value });
      }
      else {
        this.updateUser.emit(this.userFormGroup.value);
      }
    }
  }

  createEmptyUser() {
    this.tempUser = {
      id: null,
      firstName: '',
      lastName: '',
      department: '',
      birthdate: new Date(),
      gender: '',
      address: ''
    };
  }

  ngOnInit() {
    if (!this.tempUser) {
      this.createEmptyUser();
    }
  }
}
