import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-left">
          <div class="auth-branding">
            <a routerLink="/" class="auth-logo">
              <div class="logo-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="url(#regLogoGrad)" />
                  <path
                    d="M12 25L18 18L24 22L30 14"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle cx="30" cy="14" r="2.5" fill="white" />
                  <defs>
                    <linearGradient id="regLogoGrad" x1="0" y1="0" x2="40" y2="40">
                      <stop stop-color="#00BFA6" />
                      <stop offset="1" stop-color="#00796B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span class="logo-text">Rising Stock of India</span>
            </a>

            <h1>Start Your Journey</h1>
            <p>Join 15,000+ investors who trust us for their wealth creation.</p>

            <div class="auth-features">
              <div class="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>SEBI Registered Research Analyst</span>
              </div>
              <div class="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>95% success rate on recommendations</span>
              </div>
              <div class="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Free educational resources</span>
              </div>
            </div>
          </div>
        </div>

        <div class="auth-right">
          <div class="auth-form-wrapper">
            <h2>Create your account</h2>
            <p class="auth-subtitle">Fill in your details to get started</p>

            <form class="auth-form" (submit)="onRegister($event)">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    [(ngModel)]="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    [(ngModel)]="lastName"
                    name="lastName"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  [(ngModel)]="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  [(ngModel)]="phone"
                  name="phone"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <div class="input-wrapper">
                  <input
                    [type]="showPassword() ? 'text' : 'password'"
                    id="password"
                    [(ngModel)]="password"
                    name="password"
                    placeholder="Create a strong password"
                    required
                    minlength="8"
                  />
                  <button
                    type="button"
                    class="toggle-password"
                    (click)="showPassword.set(!showPassword())"
                  >
                    @if (showPassword()) {
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path
                          d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                        ></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    } @else {
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    }
                  </button>
                </div>
                <p class="password-hint">Minimum 8 characters</p>
              </div>

              <div class="form-group">
                <label class="checkbox-wrapper">
                  <input type="checkbox" [(ngModel)]="agreeTerms" name="agreeTerms" required />
                  <span>
                    I agree to the
                    <a routerLink="/legal/terms" target="_blank">Terms & Conditions</a> and
                    <a routerLink="/legal/privacy" target="_blank">Privacy Policy</a>
                  </span>
                </label>
              </div>

              <button type="submit" class="btn-register" [disabled]="isLoading()">
                @if (isLoading()) {
                  <span class="spinner"></span>
                  Creating account...
                } @else {
                  Create Account
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                }
              </button>
            </form>

            <div class="divider">
              <span>or continue with</span>
            </div>

            <div class="social-login">
              <button class="social-btn google" (click)="registerWithGoogle()">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
            </div>

            <p class="auth-switch">
              Already have an account?
              <a routerLink="/auth/login">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  password = '';
  agreeTerms = false;
  showPassword = signal(false);
  isLoading = signal(false);

  onRegister(event: Event) {
    event.preventDefault();
    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);
  }

  registerWithGoogle() {
    console.log('Google register clicked');
  }
}
