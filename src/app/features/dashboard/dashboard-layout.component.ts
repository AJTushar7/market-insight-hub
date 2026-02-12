import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  template: `
    <div class="dashboard-layout">
      <aside class="dashboard-sidebar">
        <div class="sidebar-header">
          <a routerLink="/" class="sidebar-logo">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="url(#dashLogoGrad)" />
              <path
                d="M12 25L18 18L24 22L30 14"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="30" cy="14" r="2.5" fill="white" />
              <defs>
                <linearGradient id="dashLogoGrad" x1="0" y1="0" x2="40" y2="40">
                  <stop stop-color="#00BFA6" />
                  <stop offset="1" stop-color="#00796B" />
                </linearGradient>
              </defs>
            </svg>
            <span>Rising Stock</span>
          </a>
        </div>

        <nav class="sidebar-nav">
          <a
            routerLink="/dashboard"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="nav-item"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Overview</span>
          </a>
          <a routerLink="/dashboard/portfolio" routerLinkActive="active" class="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="20" x2="12" y2="10"></line>
              <line x1="18" y1="20" x2="18" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
            <span>Portfolio</span>
          </a>
          <a routerLink="/dashboard/recommendations" routerLinkActive="active" class="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"></polyline>
              <polyline points="17,6 23,6 23,12"></polyline>
            </svg>
            <span>Recommendations</span>
          </a>
          <a routerLink="/dashboard/my-courses" routerLinkActive="active" class="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            <span>My Courses</span>
          </a>
          <a routerLink="/dashboard/settings" routerLinkActive="active" class="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
              ></path>
            </svg>
            <span>Settings</span>
          </a>
        </nav>

        <div class="sidebar-footer">
          <a href="#" class="nav-item logout">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span>Logout</span>
          </a>
        </div>
      </aside>

      <main class="dashboard-main">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      @use 'styles/variables' as *;
      @use 'styles/mixins' as *;

      .dashboard-layout {
        display: flex;
        min-height: 100vh;
        background: $bg-primary;
      }

      .dashboard-sidebar {
        width: 260px;
        background: $bg-secondary;
        border-right: 1px solid $border-light;
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 100;
      }

      .sidebar-header {
        padding: $space-5;
        border-bottom: 1px solid $border-light;
      }

      .sidebar-logo {
        display: flex;
        align-items: center;
        gap: $space-3;
        text-decoration: none;

        svg {
          width: 36px;
          height: 36px;
        }

        span {
          font-family: $font-heading;
          font-size: $text-lg;
          font-weight: $font-bold;
          color: $text-primary;
        }
      }

      .sidebar-nav {
        flex: 1;
        padding: $space-4;
        display: flex;
        flex-direction: column;
        gap: $space-1;
      }

      .nav-item {
        display: flex;
        align-items: center;
        gap: $space-3;
        padding: $space-3 $space-4;
        color: $text-secondary;
        text-decoration: none;
        border-radius: $radius-lg;
        transition: $transition-fast;

        svg {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        span {
          font-size: $text-sm;
          font-weight: $font-medium;
        }

        &:hover {
          background: $bg-tertiary;
          color: $text-primary;
        }

        &.active {
          background: rgba($primary-500, 0.1);
          color: $primary-500;
        }

        &.logout {
          color: $error-500;

          &:hover {
            background: rgba($error-500, 0.1);
          }
        }
      }

      .sidebar-footer {
        padding: $space-4;
        border-top: 1px solid $border-light;
      }

      .dashboard-main {
        flex: 1;
        margin-left: 260px;
        padding: $space-8;
      }
    `,
  ],
})
export class DashboardLayoutComponent {}
