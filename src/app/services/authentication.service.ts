import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
      if(email=="sruthi"){
      var user= new User();
      user.firstName ="Sruthi";
      user.lastName="Netheti";
      user.email="sruthi@variyasinc.com";
      user.password="1234";
      user.phone=9876543210;
      user.role="employee"
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    } else{
      var user= new User();
      user.firstName ="Manoj";
      user.lastName="Veluchuri";
      user.email="Manoj@variyasinc.com";
      user.password="1234";
      user.phone=9876543210;
      user.role="admin"
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }
      return this.currentUser;
      /* uncomment when server side code is implemented
        return this.http.post<any>(`auth/login`, { email, password })
            .pipe(map(user => {
                if (user && user.token) {
                    // store user details in local storage to keep user logged in
                    localStorage.setItem('currentUser', JSON.stringify(user.result));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));*/
    }

    logout() {
        // remove user data from local storage for log out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
