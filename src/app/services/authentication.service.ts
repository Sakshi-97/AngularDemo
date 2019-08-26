import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    // currentUserValue: any;


    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        console.log(localStorage.getItem('currentUser'));
        // this.currentUserValue = JSON.parse(localStorage.getItem('currentUser'));
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    public get isLoggedIn(): any {
        if(this.currentUserSubject.value) return true;
        return false;
    }

    login(username: string, password: string) {
        // let user;
        return this.http.post<any>(`http://18.228.42.122/api/login`, { email:username, password:password })
            .pipe(map(user => {
                console.log(user);
                let userData = user.data;

                
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                // user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(userData);
                return userData;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}