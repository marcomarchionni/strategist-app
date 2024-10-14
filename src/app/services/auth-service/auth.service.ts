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

  private accessTokenSubject = new BehaviorSubject<string | null>(null);
  public accessToken$ = this.accessTokenSubject.asObservable();
  private userSubject = new BehaviorSubject<User | null>(null); // Store user info
  public user$ = this.userSubject.asObservable(); // Observable for user info
  private refreshTokenSubject = new BehaviorSubject<string | null>(null);
  public refreshToken$ = this.refreshTokenSubject.asObservable();

  public isAuthenticated$: Observable<boolean> = new Observable<boolean>();

  constructor(private http: HttpClient, private router: Router) {
    const savedToken = localStorage.getItem('accessToken');
    const savedUser = localStorage.getItem('user');
    const savedRefreshToken = localStorage.getItem('refreshToken');

    if (savedToken) {
      console.log('Saved token found');
      this.accessTokenSubject.next(savedToken);
    }

    if (savedUser) {
      console.log('Saved user found');
      this.userSubject.next(JSON.parse(savedUser));
    }

    if (savedRefreshToken) {
      this.refreshTokenSubject.next(savedRefreshToken);
    }

    // Create an observable that combines token and user state to determine if authenticated
    this.isAuthenticated$ = combineLatest([
      this.accessTokenSubject,
      this.userSubject,
    ]).pipe(map(([accessToken, user]) => !!accessToken && !!user));
  }

  signin(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password }).pipe(
      tap((response) => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.accessTokenSubject.next(response.accessToken);
        this.userSubject.next(response.user);
        this.refreshTokenSubject.next(response.refreshToken);
      })
    );
  }

  signOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user'); // Remove user info
    this.accessTokenSubject.next(null);
    this.refreshTokenSubject.next(null);
    this.userSubject.next(null); // Clear user info
  }

  getAccessToken(): string | null {
    return this.accessTokenSubject.value;
  }

  getUser(): User | null {
    return this.userSubject.value; // Return user from localStorage if available
  }
}
