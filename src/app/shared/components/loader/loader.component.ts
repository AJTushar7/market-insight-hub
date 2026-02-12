import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader-overlay" [class.visible]="isLoading()">
      <div class="loader-content">
        <div class="loader-chart">
          <!-- Animated Stock Chart SVG -->
          <svg viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
            <!-- Grid lines -->
            <g class="grid-lines" stroke="#21262D" stroke-width="0.5">
              <line x1="0" y1="15" x2="100" y2="15" />
              <line x1="0" y1="30" x2="100" y2="30" />
              <line x1="0" y1="45" x2="100" y2="45" />
            </g>

            <!-- Animated chart line -->
            <path
              class="chart-line"
              d="M0,45 L15,42 L25,35 L35,38 L45,25 L55,28 L65,15 L75,20 L85,8 L100,12"
              fill="none"
              stroke="url(#chartGradient)"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- Gradient area under line -->
            <path
              class="chart-area"
              d="M0,45 L15,42 L25,35 L35,38 L45,25 L55,28 L65,15 L75,20 L85,8 L100,12 L100,60 L0,60 Z"
              fill="url(#areaGradient)"
            />

            <!-- Moving dot -->
            <circle class="chart-dot" r="4" fill="#00BFA6">
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                path="M0,45 L15,42 L25,35 L35,38 L45,25 L55,28 L65,15 L75,20 L85,8 L100,12"
              />
            </circle>

            <!-- Definitions -->
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#00BFA6" />
                <stop offset="100%" stop-color="#00796B" />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(0, 191, 166, 0.3)" />
                <stop offset="100%" stop-color="rgba(0, 191, 166, 0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div class="loader-text">
          <span class="loader-brand">Rising Stock</span>
          <span class="loader-dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @use 'styles/variables' as *;
      @use 'styles/mixins' as *;

      .loader-overlay {
        position: fixed;
        inset: 0;
        background: $bg-primary;
        z-index: $z-loader;
        @include flex-center;
        opacity: 0;
        visibility: hidden;
        transition:
          opacity $duration-300 $ease-smooth,
          visibility $duration-300 $ease-smooth;

        &.visible {
          opacity: 1;
          visibility: visible;
        }
      }

      .loader-content {
        @include flex-column-center;
        gap: $space-6;
      }

      .loader-chart {
        width: 160px;
        height: 100px;

        @include md {
          width: 200px;
          height: 120px;
        }

        svg {
          width: 100%;
          height: 100%;
        }
      }

      .chart-line {
        stroke-dasharray: 200;
        stroke-dashoffset: 200;
        animation: drawLine 2s ease-in-out infinite;
      }

      .chart-area {
        opacity: 0;
        animation: fadeInArea 2s ease-in-out infinite;
      }

      .chart-dot {
        filter: drop-shadow(0 0 6px rgba($primary-500, 0.8));
      }

      @keyframes drawLine {
        0% {
          stroke-dashoffset: 200;
        }
        50%,
        100% {
          stroke-dashoffset: 0;
        }
      }

      @keyframes fadeInArea {
        0%,
        20% {
          opacity: 0;
        }
        50%,
        100% {
          opacity: 1;
        }
      }

      .loader-text {
        @include flex-center;
        gap: $space-2;
      }

      .loader-brand {
        font-family: $font-heading;
        font-size: $text-xl;
        font-weight: $font-bold;
        color: $text-primary;

        @include md {
          font-size: $text-2xl;
        }
      }

      .loader-dots {
        display: flex;
        gap: 4px;
        padding-left: $space-1;

        span {
          width: 6px;
          height: 6px;
          background: $primary-500;
          border-radius: $radius-full;
          animation: bounce 1.4s ease-in-out infinite both;

          &:nth-child(1) {
            animation-delay: -0.32s;
          }

          &:nth-child(2) {
            animation-delay: -0.16s;
          }

          &:nth-child(3) {
            animation-delay: 0;
          }
        }
      }

      @keyframes bounce {
        0%,
        80%,
        100% {
          transform: scale(0);
        }
        40% {
          transform: scale(1);
        }
      }
    `,
  ],
})
export class LoaderComponent implements OnInit, OnDestroy {
  isLoading = signal(true);
  private routerSubscription?: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    // Initial page load
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);

    // Route navigation
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading.set(true);
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.isLoading.set(false);
        }, 500);
      }
    });
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }
}
