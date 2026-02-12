import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Stock Market Courses</h1>
        <p>Learn from experts and master the art of investing.</p>
      </div>
    </section>

    <section class="courses-content">
      <div class="container">
        <div class="courses-grid">
          @for (course of courses; track course.slug) {
            <a [routerLink]="['/courses', course.slug]" class="course-card">
              <div class="course-thumbnail">
                <div class="course-badge">{{ course.level }}</div>
                <div class="course-play">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <div class="course-content">
                <h3>{{ course.title }}</h3>
                <p>{{ course.description }}</p>
                <div class="course-meta">
                  <span class="duration">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {{ course.duration }}
                  </span>
                  <span class="lessons">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    </svg>
                    {{ course.lessons }} Lessons
                  </span>
                </div>
                <div class="course-footer">
                  <div class="course-pricing">
                    <span class="original-price">₹{{ course.originalPrice | number }}</span>
                    <span class="current-price">₹{{ course.price | number }}</span>
                  </div>
                  <div class="course-rating">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107">
                      <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      ></polygon>
                    </svg>
                    {{ course.rating }}
                  </div>
                </div>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @use 'styles/variables' as *;
      @use 'styles/mixins' as *;

      .page-hero {
        padding: $space-16 0;
        background: $bg-secondary;
        text-align: center;

        h1 {
          @include heading-1;
          margin-bottom: $space-4;
        }
        p {
          @include body-large;
          color: $text-secondary;
        }
      }

      .courses-content {
        @include section-padding;
      }

      .courses-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: $space-6;

        @include sm {
          grid-template-columns: repeat(2, 1fr);
        }
        @include lg {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .course-card {
        @include card;
        padding: 0;
        overflow: hidden;
        text-decoration: none;
        transition: $transition-default;

        &:hover {
          text-decoration: none;
          transform: translateY(-4px);
          box-shadow: $shadow-xl;

          .course-play {
            opacity: 1;
          }
        }
      }

      .course-thumbnail {
        position: relative;
        height: 180px;
        background: $gradient-primary;
        @include flex-center;
      }

      .course-badge {
        position: absolute;
        top: $space-3;
        left: $space-3;
        @include badge-primary;
        text-transform: capitalize;
      }

      .course-play {
        width: 60px;
        height: 60px;
        @include flex-center;
        background: rgba(white, 0.2);
        border-radius: $radius-full;
        color: white;
        opacity: 0;
        transition: $transition-default;
      }

      .course-content {
        padding: $space-5;

        h3 {
          font-size: $text-lg;
          font-weight: $font-semibold;
          color: $text-primary;
          margin-bottom: $space-2;
        }

        p {
          font-size: $text-sm;
          color: $text-secondary;
          @include line-clamp(2);
          margin-bottom: $space-3;
        }
      }

      .course-meta {
        display: flex;
        gap: $space-4;
        margin-bottom: $space-4;

        span {
          display: flex;
          align-items: center;
          gap: $space-1;
          font-size: $text-xs;
          color: $text-muted;

          svg {
            color: $primary-500;
          }
        }
      }

      .course-footer {
        @include flex-between;
        padding-top: $space-3;
        border-top: 1px solid $border-light;
      }

      .course-pricing {
        display: flex;
        align-items: center;
        gap: $space-2;

        .original-price {
          font-size: $text-sm;
          color: $text-muted;
          text-decoration: line-through;
        }

        .current-price {
          font-size: $text-lg;
          font-weight: $font-bold;
          color: $primary-500;
        }
      }

      .course-rating {
        display: flex;
        align-items: center;
        gap: $space-1;
        font-size: $text-sm;
        font-weight: $font-medium;
        color: $text-primary;
      }
    `,
  ],
})
export class CoursesComponent {
  courses = [
    {
      slug: 'technical-analysis-masterclass',
      title: 'Technical Analysis Masterclass',
      description: 'Master chart patterns, indicators, and trading strategies from scratch.',
      duration: '12 hours',
      lessons: 48,
      price: 6999,
      originalPrice: 14999,
      rating: 4.8,
      level: 'beginner',
    },
    {
      slug: 'fundamental-analysis',
      title: 'Fundamental Analysis Course',
      description: 'Learn to analyze company financials and find undervalued stocks.',
      duration: '8 hours',
      lessons: 32,
      price: 4999,
      originalPrice: 9999,
      rating: 4.9,
      level: 'intermediate',
    },
    {
      slug: 'options-trading',
      title: 'Options Trading for Beginners',
      description: 'Understand options basics, strategies, and risk management.',
      duration: '10 hours',
      lessons: 40,
      price: 7999,
      originalPrice: 15999,
      rating: 4.7,
      level: 'beginner',
    },
    {
      slug: 'advanced-chart-patterns',
      title: 'Advanced Chart Patterns',
      description: 'Deep dive into complex patterns and professional trading setups.',
      duration: '6 hours',
      lessons: 24,
      price: 5999,
      originalPrice: 11999,
      rating: 4.8,
      level: 'advanced',
    },
  ];
}
