import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="auth-page">
      <div class="auth-wrapper">
        <a routerLink="/" class="auth-logo">
          <div class="logo-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="url(#fpLogoGrad)" />
              <path
                d="M12 25L18 18L24 22L30 14"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="30" cy="14" r="2.5" fill="white" />
              <defs>
                <linearGradient id="fpLogoGrad" x1="0" y1="0" x2="40" y2="40">
                  <stop stop-color="#00BFA6" />
                  <stop offset="1" stop-color="#00796B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span class="logo-text">Rising Stock of India</span>
        </a>

        <div class="auth-card">
          @if (!emailSent()) {
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h1>Forgot Password?</h1>
            <p>No worries! Enter your email and we'll send you a reset link.</p>

            <form (submit)="onSubmit($event)">
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

              <button type="submit" class="btn-primary" [disabled]="isLoading()">
                @if (isLoading()) {
                  <span class="spinner"></span>
                  Sending...
                } @else {
                  Send Reset Link
                }
              </button>
            </form>
          } @else {
            <div class="card-icon success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h1>Check Your Email</h1>
            <p>
              We've sent a password reset link to <strong>{{ email }}</strong>
            </p>

            <button class="btn-secondary" (click)="emailSent.set(false)">
              Didn't receive? Resend
            </button>
          }

          <a routerLink="/auth/login" class="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Login
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @use 'styles/variables' as *;
      @use 'styles/mixins' as *;

      .auth-page {
        min-height: 100vh;
        @include flex-center;
        padding: $space-6;
        background: $bg-primary;
      }

      .auth-wrapper {
        width: 100%;
        max-width: 420px;
        text-align: center;
      }

      .auth-logo {
        display: inline-flex;
        align-items: center;
        gap: $space-3;
        text-decoration: none;
        margin-bottom: $space-8;

        .logo-icon {
          width: 40px;
          height: 40px;
          svg {
            width: 100%;
            height: 100%;
          }
        }

        .logo-text {
          font-family: $font-heading;
          font-size: $text-lg;
          font-weight: $font-bold;
          color: $text-primary;
        }
      }

      .auth-card {
        @include card;
        text-align: center;

        h1 {
          font-size: $text-2xl;
          margin-bottom: $space-2;
        }

        > p {
          color: $text-secondary;
          margin-bottom: $space-6;

          strong {
            color: $text-primary;
          }
        }
      }

      .card-icon {
        width: 64px;
        height: 64px;
        @include flex-center;
        background: $bg-tertiary;
        border-radius: $radius-full;
        margin: 0 auto $space-5;

        svg {
          width: 28px;
          height: 28px;
          color: $primary-500;
        }

        &.success {
          background: rgba($success-500, 0.1);
          svg {
            color: $success-500;
          }
        }
      }

      .form-group {
        margin-bottom: $space-5;
        text-align: left;

        label {
          display: block;
          font-size: $text-sm;
          font-weight: $font-medium;
          color: $text-primary;
          margin-bottom: $space-2;
        }

        input {
          @include input-base;
        }
      }

      .btn-primary {
        @include button-primary;
        width: 100%;
        padding: $space-4;
        margin-bottom: $space-6;

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(white, 0.3);
          border-top-color: white;
          border-radius: $radius-full;
          animation: spin 0.8s linear infinite;
        }
      }

      .btn-secondary {
        @include button-secondary;
        width: 100%;
        padding: $space-4;
        margin-bottom: $space-6;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      .back-link {
        display: inline-flex;
        align-items: center;
        gap: $space-2;
        font-size: $text-sm;
        color: $text-secondary;
        text-decoration: none;

        svg {
          width: 16px;
          height: 16px;
        }

        &:hover {
          color: $primary-500;
        }
      }
    `,
  ],
})
export class ForgotPasswordComponent {
  email = '';
  isLoading = signal(false);
  emailSent = signal(false);

  onSubmit(event: Event) {
    event.preventDefault();
    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
      this.emailSent.set(true);
    }, 1500);
  }
}
