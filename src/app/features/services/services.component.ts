import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Our Services</h1>
        <p>Comprehensive investment solutions tailored for your success.</p>
      </div>
    </section>

    <section class="services-content">
      <div class="container">
        <div class="services-grid">
          @for (service of services; track service.slug) {
            <a
              [routerLink]="['/services', service.slug]"
              class="service-card"
              [class.featured]="service.featured"
            >
              @if (service.featured) {
                <span class="featured-badge">Most Popular</span>
              }
              <div class="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <div class="service-pricing">
                <span class="price">Starting at ₹{{ service.startingPrice | number }}</span>
              </div>
              <span class="learn-more">
                Learn More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
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

      .services-content {
        @include section-padding;
      }

      .services-grid {
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

      .service-card {
        @include card;
        @include card-hover;
        position: relative;
        text-decoration: none;

        &.featured {
          border-color: $primary-500;
        }

        &:hover {
          text-decoration: none;
        }
      }

      .featured-badge {
        position: absolute;
        top: $space-4;
        right: $space-4;
        @include badge-primary;
      }

      .service-icon {
        width: 56px;
        height: 56px;
        @include flex-center;
        background: $bg-tertiary;
        border-radius: $radius-xl;
        margin-bottom: $space-4;

        svg {
          width: 28px;
          height: 28px;
          color: $primary-500;
        }
      }

      h3 {
        font-size: $text-xl;
        font-weight: $font-semibold;
        color: $text-primary;
        margin-bottom: $space-3;
      }

      p {
        font-size: $text-sm;
        color: $text-secondary;
        margin-bottom: $space-4;
      }

      .service-pricing {
        margin-bottom: $space-4;

        .price {
          font-size: $text-lg;
          font-weight: $font-bold;
          color: $primary-500;
        }
      }

      .learn-more {
        display: inline-flex;
        align-items: center;
        gap: $space-2;
        font-size: $text-sm;
        font-weight: $font-medium;
        color: $primary-500;

        svg {
          transition: transform $duration-200 $ease-smooth;
        }
      }

      .service-card:hover .learn-more svg {
        transform: translateX(4px);
      }
    `,
  ],
})
export class ServicesComponent {
  services = [
    {
      slug: 'premium-advisory',
      title: 'Premium Advisory',
      description:
        'Get exclusive stock recommendations from our SEBI-registered research analysts with detailed analysis.',
      startingPrice: 4999,
      featured: true,
    },
    {
      slug: 'portfolio-review',
      title: 'Portfolio Review',
      description:
        'Expert analysis of your existing portfolio with personalized rebalancing recommendations.',
      startingPrice: 3999,
      featured: false,
    },
    {
      slug: 'single-share',
      title: 'Single Share Advice',
      description: 'Get detailed Buy/Sell/Hold advice for any stock of your choice.',
      startingPrice: 499,
      featured: false,
    },
    {
      slug: 'offline-workshop',
      title: 'Offline Workshops',
      description: 'Face-to-face intensive workshops for hands-on learning experience.',
      startingPrice: 14999,
      featured: false,
    },
    {
      slug: 'ebooks',
      title: 'E-Books & Resources',
      description: 'Access premium e-books covering trading strategies and market psychology.',
      startingPrice: 999,
      featured: false,
    },
    {
      slug: 'one-on-one',
      title: '1-on-1 Consultation',
      description: 'Personal consultation with our expert analysts for your specific needs.',
      startingPrice: 2499,
      featured: false,
    },
  ];
}
