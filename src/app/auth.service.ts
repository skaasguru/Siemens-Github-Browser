import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null | undefined;

  
  public get isLoggedIn(): boolean {
    if (this.token === undefined) {
      this.token = localStorage.getItem('login_token');
    }
    return this.token !== null;
  }

  public getToken(): string | null {
    return this.token ?? null;
  }
  
}
