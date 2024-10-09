import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject the AuthService
  const router = inject(Router); // Inject the Router

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/auth']); // Redirect to login if not authenticated
    return false;
  }
};
