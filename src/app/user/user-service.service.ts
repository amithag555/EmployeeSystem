import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { IUser } from './Models/IUser.model';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserServiceService implements OnInit {

  private userData: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);

  public userDataSource: Observable<IUser[]> = this.userData;

  constructor(private http: HttpClient) {

    this.getUsersData();
  }

  getUsersData() {
    return this.http.get<IUser[]>('http://localhost:3000/Users').subscribe(user => this.userData.next(user));
  }

  deleteUser(userToDelete: IUser) {
    return this.http.delete(`http://localhost:3000/Users/${userToDelete.id}`).subscribe(data => this.getUsersData());
  }

  updateUser(userToUpdate: IUser) { 
    return this.http.put(`http://localhost:3000/Users/${userToUpdate.id}`, userToUpdate).subscribe(data => this.getUsersData()); 
  }

  createUser(newUser: IUser) {
    return this.http.post('http://localhost:3000/Users', newUser).subscribe(data => this.getUsersData()); 
  }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<{ employee_name: string }[]>('http://dummy.restapiexample.com/api/v1/employees').pipe(
      map(serviveUser => {
        return serviveUser.map((serviveUser, index) => {
          let tmpUser: IUser = {
            firstName: serviveUser.employee_name,
            lastName: 'hagbi',
            department: 'HR',
            id: index,
            gender: 'male',
            address: '',
            birthdate: new Date()
          };
          return tmpUser;
        });
      })
    );
  }

  getUsersData_old(): Observable<IUser[]> {

    return this.http.get<{ results: { name: { first: string, last: string } }[] }>('https://randomuser.me/api/?results=1000').pipe(
      map((serverData) => {
        return serverData.results.map((serverUser, index) => {
          const tempUser: IUser = {
            id: index,
            firstName: serverUser.name.first,
            lastName: serverUser.name.last,
            department: 'Dep1',
            address: 'hahelmonit',
            gender: 'male',
            birthdate: new Date(1994, 4, 1)
          };
          return tempUser;
        });
      })
    );
  }

  ngOnInit() {
  }
}








