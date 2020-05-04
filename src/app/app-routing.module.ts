import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { TripsLayoutComponent } from './trips/trips-layout/trips-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'user', component: UserLayoutComponent },
  { path: 'trips', component: TripsLayoutComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})

export class AppRoutingModule { }
