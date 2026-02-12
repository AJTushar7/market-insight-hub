import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-header">
          <a routerLink="/" class="sidebar-logo">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="url(#adminLogoGrad)" />
              <path
                d="M12 25L18 18L24 22L30 14"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle cx="30" cy="14" r="2.5" fill="white" />
              <defs>
                <linearGradient id="adminLogoGrad" x1="0" y1="0" x2="40" y2="40">
                  <stop stop-color="#00BFA6" />
                  <stop offset="1" stop-color="#00796B" />
                </linearGradient>
              </defs>
            </svg>
            <span>RS Admin</span>
          </a>
        </div>

        <nav class="sidebar-nav">
          <span class="nav-section">Main</span>
          <a
            routerLink="/admin"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="nav-item"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>Dashboard</span>
          </a>

          <span class="nav-section">Management</span>
          <a routerLink="/admin/users" routerLinkActive="active" class="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>Users</span>
          </a>
          <a routerLink="/admin/recommendations" routerLinkActive="active" class="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"></polyline>
              <polyline points="17,6 23,6 23,12"></polyline>
            </svg>
            <span>Recommendations</span>
          </a>
          <a routerLink="/admin/courses" routerLinkActive="active" class="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            <span>Courses</span>
          </a>
          <a routerLink="/admin/content" routerLinkActive="active" class="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            <span>Content</span>
          </a>

          <span class="nav-section">Finance</span>
          <a routerLink="/admin/payments" routerLinkActive="active" class="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
            <span>Payments</span>
          </a>
        </nav>

        <div class="sidebar-footer">
          <a routerLink="/dashboard" class="nav-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5"></path>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Exit Admin</span>
          </a>
        </div>
      </aside>

      <main class="admin-main">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      @use 'styles/variables' as *;
      @use 'styles/mixins' as *;

      .admin-layout {
        display: flex;
        min-height: 100vh;
        background: $bg-primary;
      }

      .admin-sidebar {
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
        overflow-y: auto;
      }

      .nav-section {
        font-size: $text-xs;
        font-weight: $font-medium;
        color: $text-muted;
        text-transform: uppercase;
        letter-spacing: $tracking-wide;
        padding: $space-4 $space-3 $space-2;

        &:first-child {
          padding-top: 0;
        }
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
          width: 18px;
          height: 18px;
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
      }

      .sidebar-footer {
        padding: $space-4;
        border-top: 1px solid $border-light;
      }

      .admin-main {
        flex: 1;
        margin-left: 260px;
        padding: $space-8;
      }
    `,
  ],
})
export class AdminLayoutComponent {}
