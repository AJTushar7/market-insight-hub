import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-dashboard">
      <header class="page-header">
        <h1>Admin Dashboard</h1>
        <p>Manage your platform from here.</p>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-header">
            <span class="stat-label">Total Users</span>
            <span class="stat-trend positive">+12%</span>
          </div>
          <span class="stat-value">15,287</span>
          <span class="stat-sub">Active subscribers: 8,542</span>
        </div>

        <div class="stat-card">
          <div class="stat-header">
            <span class="stat-label">Revenue (MTD)</span>
            <span class="stat-trend positive">+18%</span>
          </div>
          <span class="stat-value">₹12,45,000</span>
          <span class="stat-sub">247 transactions</span>
        </div>

        <div class="stat-card">
          <div class="stat-header">
            <span class="stat-label">Active Recommendations</span>
          </div>
          <span class="stat-value">42</span>
          <span class="stat-sub">8 targets achieved this week</span>
        </div>

        <div class="stat-card">
          <div class="stat-header">
            <span class="stat-label">Course Enrollments</span>
            <span class="stat-trend positive">+8%</span>
          </div>
          <span class="stat-value">3,847</span>
          <span class="stat-sub">12 courses published</span>
        </div>
      </div>

      <div class="quick-actions">
        <h2>Quick Actions</h2>
        <div class="actions-grid">
          <button class="action-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Add Recommendation</span>
          </button>
          <button class="action-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="19" y1="8" x2="19" y2="14"></line>
              <line x1="22" y1="11" x2="16" y2="11"></line>
            </svg>
            <span>Add User</span>
          </button>
          <button class="action-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            <span>Create Blog Post</span>
          </button>
          <button class="action-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <span>Upload Course</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @use 'styles/variables' as *;
      @use 'styles/mixins' as *;

      .page-header {
        margin-bottom: $space-8;

        h1 {
          font-size: $text-2xl;
          margin-bottom: $space-2;
        }

        p {
          color: $text-secondary;
          margin: 0;
        }
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: $space-5;
        margin-bottom: $space-10;
      }

      .stat-card {
        @include card;

        .stat-header {
          @include flex-between;
          margin-bottom: $space-3;
        }

        .stat-label {
          font-size: $text-sm;
          color: $text-muted;
        }

        .stat-trend {
          font-size: $text-xs;
          padding: $space-1 $space-2;
          border-radius: $radius-sm;

          &.positive {
            background: rgba($stock-green, 0.1);
            color: $stock-green;
          }
        }

        .stat-value {
          display: block;
          font-size: $text-3xl;
          font-weight: $font-bold;
          color: $text-primary;
          margin-bottom: $space-2;
        }

        .stat-sub {
          font-size: $text-xs;
          color: $text-secondary;
        }
      }

      .quick-actions {
        h2 {
          font-size: $text-lg;
          margin-bottom: $space-5;
        }
      }

      .actions-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: $space-4;
      }

      .action-card {
        @include flex-column-center;
        gap: $space-3;
        padding: $space-8;
        background: $bg-secondary;
        border: 1px solid $border-light;
        border-radius: $radius-xl;
        color: $text-primary;
        cursor: pointer;
        transition: $transition-default;

        svg {
          width: 32px;
          height: 32px;
          color: $primary-500;
        }

        span {
          font-size: $text-sm;
          font-weight: $font-medium;
        }

        &:hover {
          background: $bg-elevated;
          border-color: $primary-500;
          transform: translateY(-4px);
        }
      }
    `,
  ],
})
export class AdminDashboardComponent {}
