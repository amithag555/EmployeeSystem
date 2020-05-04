import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableUserComponent } from './table-user/table-user.component';
import { UserServiceService } from './user-service.service';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [UserLayoutComponent, FormUserComponent, TableUserComponent],
  exports: [UserLayoutComponent],
  providers: [UserServiceService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UserModule { }
