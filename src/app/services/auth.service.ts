import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router) {}

  // Sign up user
  signUp(email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        console.log('User signed up successfully:', result);
        this.router.navigate(['/login']); // Navigate after sign-up
      })
      .catch((error) => {
        console.error('Error signing up:', error.message);
        alert('Sign-up failed: ' + error.message); // Optionally display error to the user
      });
  }

  // Log in user
  login(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.router.navigate(['/home']);  // Navigate after login
      })
      .catch((error) => {
        console.error('Error logging in:', error.message);
        alert('Login failed: ' + error.message);  // Optionally display error to the user
      });
  }

  // Log out user
  logout(): Promise<void> {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/login']);  // Navigate to login after logout
    });
  }

  // Get Auth State to check if user is logged in
  getAuthState(): Observable<any> {
    return new Observable((observer) => {
      const unsubscribe = onAuthStateChanged(this.auth, (user) => {
        observer.next(user);
      });
      return { unsubscribe };  // Clean up subscription on destroy
    });
  }
}
