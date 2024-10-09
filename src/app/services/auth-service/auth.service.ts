import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
  public isAuthenticated$: Observable<boolean> = new Observable<boolean>();

  constructor(private http: HttpClient, private router: Router) {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');

    if (savedToken) {
      this.tokenSubject.next(savedToken);
    }

    if (savedUser) {
      this.userSubject.next(JSON.parse(savedUser));
    }

    // Create an observable that combines token and user state to determine if authenticated
    this.isAuthenticated$ = combineLatest([
      this.tokenSubject,
      this.userSubject,
    ]).pipe(map(([token, user]) => !!token && !!user));
  }

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

  getToken(): string | null {
    return this.tokenSubject.value;
  }

  getUser(): User | null {
    return this.userSubject.value; // Return user from localStorage if available
  }
}
