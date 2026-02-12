import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-page">
      <div class="auth-container">
        <div class="auth-left">
          <div class="auth-branding">
            <a routerLink="/" class="auth-logo">
              <div class="logo-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="url(#authLogoGradient)" />
                  <path
                    d="M12 25L18 18L24 22L30 14"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle cx="30" cy="14" r="2.5" fill="white" />
                  <defs>
                    <linearGradient id="authLogoGradient" x1="0" y1="0" x2="40" y2="40">
                      <stop stop-color="#00BFA6" />
                      <stop offset="1" stop-color="#00796B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span class="logo-text">Rising Stock of India</span>
            </a>

            <h1>Welcome Back!</h1>
            <p>Login to access your dashboard, stock tips, and exclusive content.</p>

            <div class="auth-features">
              <div class="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Real-time stock recommendations</span>
              </div>
              <div class="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Portfolio tracking & analytics</span>
              </div>
              <div class="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Exclusive courses & webinars</span>
              </div>
            </div>
          </div>
        </div>

        <div class="auth-right">
          <div class="auth-form-wrapper">
            <h2>Login to your account</h2>
            <p class="auth-subtitle">Enter your credentials to access your account</p>

            <form class="auth-form" (submit)="onLogin($event)">
              <div class="form-group">
                <label for="email">Email Address</label>
                <div class="input-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <input
                    type="email"
                    id="email"
                    [(ngModel)]="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <div class="input-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input
                    [type]="showPassword() ? 'text' : 'password'"
                    id="password"
                    [(ngModel)]="password"
                    name="password"
                    placeholder="Enter your password"
                    required
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
              </div>

              <div class="form-options">
                <label class="checkbox-wrapper">
                  <input type="checkbox" [(ngModel)]="rememberMe" name="rememberMe" />
                  <span class="checkmark"></span>
                  Remember me
                </label>
                <a routerLink="/auth/forgot-password" class="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" class="btn-login" [disabled]="isLoading()">
                @if (isLoading()) {
                  <span class="spinner"></span>
                  Logging in...
                } @else {
                  Login
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
              <button class="social-btn google" (click)="loginWithGoogle()">
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
              Don't have an account?
              <a routerLink="/auth/register">Create one</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';
  rememberMe = false;
  showPassword = signal(false);
  isLoading = signal(false);

  onLogin(event: Event) {
    event.preventDefault();
    this.isLoading.set(true);

    // Simulate login
    setTimeout(() => {
      this.isLoading.set(false);
      // Navigate to dashboard
    }, 1500);
  }

  loginWithGoogle() {
    console.log('Google login clicked');
  }
}
