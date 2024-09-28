import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';  // Your AuthService
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.getAuthState().pipe(
      take(1),  // Only take one value from the observable
      map(user => {
        if (user) {
          return true;  // User is authenticated, allow access
        } else {
          this.router.navigate(['/login']);  // Redirect to login page
          return false;
        }
      })
    );
  }
}
