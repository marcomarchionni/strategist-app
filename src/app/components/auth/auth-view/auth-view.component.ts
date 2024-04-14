import { Component } from '@angular/core';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-auth-view',
  standalone: true,
  imports: [SigninComponent, SignupComponent],
  templateUrl: './auth-view.component.html',
  styleUrl: './auth-view.component.scss',
})
export class AuthViewComponent {}
