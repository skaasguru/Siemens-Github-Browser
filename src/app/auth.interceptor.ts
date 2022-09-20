import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isLoggedIn) {
      const token = this.auth.getToken() ?? 'fallback_token';
      request = request.clone({
        setParams: {
          Authorization: token
        }
      });
    }
    console.log(request.urlWithParams);
    return next.handle(request);
  }
}
