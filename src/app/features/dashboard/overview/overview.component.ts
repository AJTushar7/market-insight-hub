import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overview-page">
      <header class="page-header">
        <div class="header-content">
          <h1>Welcome back, Investor! 👋</h1>
          <p>Here's an overview of your investment journey.</p>
        </div>
        <div class="header-date">
          {{ currentDate | date: 'EEEE, MMMM d, y' }}
        </div>
      </header>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon portfolio">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="20" x2="12" y2="10"></line>
              <line x1="18" y1="20" x2="18" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-label">Portfolio Value</span>
            <span class="stat-value">₹6,62,500</span>
            <span class="stat-change positive">+₹1,62,500 (32.5%)</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon invested">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 12L10 10L14 14L16 12"></path>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-label">Total Invested</span>
            <span class="stat-value">₹5,00,000</span>
            <span class="stat-change">Across 8 stocks</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon returns">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"></polyline>
              <polyline points="17,6 23,6 23,12"></polyline>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-label">Today's P&L</span>
            <span class="stat-value positive">+₹4,520</span>
            <span class="stat-change positive">+0.68%</span>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon recommendations">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              ></polygon>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-label">Active Tips</span>
            <span class="stat-value">12</span>
            <span class="stat-change">3 new this week</span>
          </div>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="card recent-recommendations">
          <div class="card-header">
            <h2>Recent Recommendations</h2>
            <a href="#">View All</a>
          </div>
          <div class="recommendations-list">
            @for (rec of recentRecommendations; track rec.symbol) {
              <div class="recommendation-item">
                <div class="rec-info">
                  <span class="rec-symbol">{{ rec.symbol }}</span>
                  <span class="rec-type" [class]="rec.type">{{ rec.type }}</span>
                </div>
                <div class="rec-prices">
                  <span class="rec-entry">Entry: ₹{{ rec.entry }}</span>
                  <span class="rec-target">Target: ₹{{ rec.target }}</span>
                </div>
                <div class="rec-status" [class]="rec.status">
                  {{ rec.status | titlecase }}
                </div>
              </div>
            }
          </div>
        </div>

        <div class="card quick-actions">
          <h2>Quick Actions</h2>
          <div class="actions-grid">
            <button class="action-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"></polyline>
              </svg>
              <span>View Tips</span>
            </button>
            <button class="action-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              </svg>
              <span>My Courses</span>
            </button>
            <button class="action-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>Webinars</span>
            </button>
            <button class="action-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @use 'styles/variables' as *;
      @use 'styles/mixins' as *;

      .page-header {
        @include flex-between;
        margin-bottom: $space-8;
        flex-wrap: wrap;
        gap: $space-4;

        h1 {
          font-size: $text-2xl;
          margin-bottom: $space-1;
        }

        p {
          color: $text-secondary;
          margin: 0;
        }

        .header-date {
          font-size: $text-sm;
          color: $text-muted;
        }
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: $space-5;
        margin-bottom: $space-8;
      }

      .stat-card {
        @include card;
        display: flex;
        align-items: center;
        gap: $space-4;
      }

      .stat-icon {
        width: 56px;
        height: 56px;
        @include flex-center;
        border-radius: $radius-xl;
        flex-shrink: 0;

        svg {
          width: 24px;
          height: 24px;
        }

        &.portfolio {
          background: rgba($primary-500, 0.1);
          color: $primary-500;
        }

        &.invested {
          background: rgba($secondary-500, 0.1);
          color: $secondary-500;
        }

        &.returns {
          background: rgba($success-500, 0.1);
          color: $success-500;
        }

        &.recommendations {
          background: rgba($warning-500, 0.1);
          color: $warning-500;
        }
      }

      .stat-content {
        display: flex;
        flex-direction: column;
      }

      .stat-label {
        font-size: $text-sm;
        color: $text-muted;
      }

      .stat-value {
        font-size: $text-2xl;
        font-weight: $font-bold;
        color: $text-primary;

        &.positive {
          color: $stock-green;
        }
      }

      .stat-change {
        font-size: $text-xs;
        color: $text-secondary;

        &.positive {
          color: $stock-green;
        }
      }

      .dashboard-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: $space-6;

        @include lg {
          grid-template-columns: 2fr 1fr;
        }
      }

      .card {
        @include card;
      }

      .card-header {
        @include flex-between;
        margin-bottom: $space-5;

        h2 {
          font-size: $text-lg;
          margin: 0;
        }

        a {
          font-size: $text-sm;
          color: $primary-500;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .recommendations-list {
        display: flex;
        flex-direction: column;
        gap: $space-3;
      }

      .recommendation-item {
        display: flex;
        align-items: center;
        gap: $space-4;
        padding: $space-3;
        background: $bg-tertiary;
        border-radius: $radius-lg;

        .rec-info {
          display: flex;
          align-items: center;
          gap: $space-2;
          flex: 1;

          .rec-symbol {
            font-weight: $font-semibold;
          }

          .rec-type {
            font-size: $text-xs;
            padding: $space-1 $space-2;
            border-radius: $radius-sm;

            &.buy {
              background: rgba($stock-green, 0.1);
              color: $stock-green;
            }

            &.hold {
              background: rgba($warning-500, 0.1);
              color: $warning-500;
            }
          }
        }

        .rec-prices {
          display: flex;
          flex-direction: column;
          font-size: $text-xs;
          color: $text-secondary;
        }

        .rec-status {
          font-size: $text-xs;
          padding: $space-1 $space-2;
          border-radius: $radius-sm;

          &.active {
            background: rgba($primary-500, 0.1);
            color: $primary-500;
          }

          &.achieved {
            background: rgba($stock-green, 0.1);
            color: $stock-green;
          }
        }
      }

      .quick-actions h2 {
        font-size: $text-lg;
        margin-bottom: $space-5;
      }

      .actions-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: $space-3;
      }

      .action-btn {
        @include flex-column-center;
        gap: $space-2;
        padding: $space-5;
        background: $bg-tertiary;
        border: 1px solid $border-light;
        border-radius: $radius-xl;
        color: $text-primary;
        cursor: pointer;
        transition: $transition-default;

        svg {
          width: 24px;
          height: 24px;
          color: $primary-500;
        }

        span {
          font-size: $text-sm;
          font-weight: $font-medium;
        }

        &:hover {
          background: $bg-elevated;
          border-color: $primary-500;
        }
      }
    `,
  ],
})
export class OverviewComponent {
  currentDate = new Date();

  recentRecommendations = [
    { symbol: 'RELIANCE', type: 'buy', entry: 2850, target: 3100, status: 'active' },
    { symbol: 'HDFC BANK', type: 'buy', entry: 1620, target: 1800, status: 'active' },
    { symbol: 'TCS', type: 'hold', entry: 3800, target: 4200, status: 'achieved' },
  ];
}
