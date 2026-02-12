import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="not-found-page">
      <div class="container">
        <div class="not-found-content">
          <div class="error-code">
            <span class="number">4</span>
            <span class="icon">
              <svg viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="45" stroke="url(#errorGrad)" stroke-width="6" />
                <path
                  d="M30 60 L45 45 L55 55 L70 35"
                  stroke="url(#errorGrad)"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="70" cy="35" r="5" fill="#00BFA6" />
                <defs>
                  <linearGradient id="errorGrad" x1="0" y1="0" x2="100" y2="100">
                    <stop stop-color="#00BFA6" />
                    <stop offset="1" stop-color="#00796B" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span class="number">4</span>
          </div>

          <h1>Page Not Found</h1>
          <p>
            Oops! The page you're looking for seems to have gone off the charts. Let's get you back
            on track.
          </p>

          <div class="action-buttons">
            <a routerLink="/" class="btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Back to Home
            </a>
            <a routerLink="/contact" class="btn-secondary"> Contact Support </a>
          </div>

          <div class="quick-links">
            <p>Or check out these popular pages:</p>
            <div class="links">
              <a routerLink="/services">Services</a>
              <a routerLink="/courses">Courses</a>
              <a routerLink="/blog">Blog</a>
              <a routerLink="/about">About Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @use 'styles/variables' as *;
      @use 'styles/mixins' as *;

      .not-found-page {
        min-height: 100vh;
        @include flex-center;
        padding: $space-8;
        background: $bg-primary;
      }

      .not-found-content {
        text-align: center;
        max-width: 500px;
      }

      .error-code {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: $space-4;
        margin-bottom: $space-8;

        .number {
          font-family: $font-heading;
          font-size: 120px;
          font-weight: $font-bold;
          @include gradient-text;
          line-height: 1;

          @include md {
            font-size: 160px;
          }
        }

        .icon {
          width: 100px;
          height: 100px;

          @include md {
            width: 130px;
            height: 130px;
          }

          svg {
            width: 100%;
            height: 100%;
          }
        }
      }

      h1 {
        font-size: $text-3xl;
        font-weight: $font-bold;
        color: $text-primary;
        margin-bottom: $space-4;

        @include md {
          font-size: $text-4xl;
        }
      }

      p {
        font-size: $text-lg;
        color: $text-secondary;
        margin-bottom: $space-8;
      }

      .action-buttons {
        display: flex;
        flex-direction: column;
        gap: $space-4;
        margin-bottom: $space-10;

        @include sm {
          flex-direction: row;
          justify-content: center;
        }
      }

      .btn-primary {
        @include button-primary;
        padding: $space-4 $space-8;
      }

      .btn-secondary {
        @include button-secondary;
        padding: $space-4 $space-8;
      }

      .quick-links {
        p {
          font-size: $text-sm;
          color: $text-muted;
          margin-bottom: $space-4;
        }

        .links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: $space-4;

          a {
            font-size: $text-sm;
            color: $primary-500;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    `,
  ],
})
export class NotFoundComponent {}
