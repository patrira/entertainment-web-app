import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router) {}

  
  signUp(email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((result) => {
        console.log('User signed up successfully:', result);
        this.router.navigate(['/login']); 
      })
      .catch((error) => {
        console.error('Error signing up:', error.message);
        alert('Sign-up failed: ' + error.message); 
      });
  }

  
  login(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.router.navigate(['/home']); 
      })
      .catch((error) => {
        console.error('Error logging in:', error.message);
        alert('Login failed: ' + error.message);  
      });
  }

  
  logout(): Promise<void> {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/login']);  
    });
  }

  
  getAuthState(): Observable<any> {
    return new Observable((observer) => {
      const unsubscribe = onAuthStateChanged(this.auth, (user) => {
        observer.next(user);
      });
      return { unsubscribe }; 
    });
  }
}
