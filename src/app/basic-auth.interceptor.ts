import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../app/services/authentication.service'

// import { AuthenticationService } from '@app/_services';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const currentUser = this.authenticationService.currentUserValue;
        console.log("___________currentUser",currentUser)
        // if (currentUser ) {
        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: `Basic ${currentUser.authdata}`
        //         }
        // }  
        request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${currentUser}`
            }
          });
        return next.handle(request);
    } 
}