import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  // Password match validator
  passwordMatchValidator(group: FormGroup): any {
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');

    if (!passwordControl || !confirmPasswordControl) {
      return null;  // Prevent null reference errors
    }

    return passwordControl.value === confirmPasswordControl.value ? null : { mismatch: true };
  }

  onSignUp(): void {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      this.authService.signUp(email, password)
        .catch((error) => {
          console.error('Sign-up error:', error);
        });
    }
  }
}
