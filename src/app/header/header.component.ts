import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<any>;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    console.log(this.authService.currentUserValue);
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

}
