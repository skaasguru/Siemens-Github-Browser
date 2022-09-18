import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn: boolean | undefined;
  
  public get isLoggedIn(): boolean {
    if (this._isLoggedIn === undefined) {
      const token = localStorage.getItem('login_token');
      this._isLoggedIn = token !== null;
    }
    return this._isLoggedIn;
  }
  
}
