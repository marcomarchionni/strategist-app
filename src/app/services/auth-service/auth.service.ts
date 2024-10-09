import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../../interfaces/entities';

@Injectable({
  providedIn: 'root', // This makes the service available app-wide
})
export class AuthService {
  private readonly apiUrl = environment.apiBaseUrl + 'auth/signin'; // Your backend login endpoint

  private tokenSubject = new BehaviorSubject<string | null>(null);
  public token$ = this.tokenSubject.asObservable();
  private userSubject = new BehaviorSubject<User | null>(null); // Store user info
  public user$ = this.userSubject.asObservable(); // Observable for user info

  constructor(private http: HttpClient, private router: Router) {}

  signin(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password }).pipe(
      tap((response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.tokenSubject.next(response.token);
        this.userSubject.next(response.user);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // Remove user info
    this.tokenSubject.next(null);
    this.userSubject.next(null); // Clear user info
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token') && !!localStorage.getItem('user');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null; // Return user from localStorage if available
  }
}
