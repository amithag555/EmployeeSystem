import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsLayoutComponent } from './trips-layout/trips-layout.component';
import { TripsFormComponent } from './trips-form/trips-form.component';
import { TripsTableComponent } from './trips-table/trips-table.component'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [TripsLayoutComponent, TripsFormComponent, TripsTableComponent], 
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class TripsModule { }
