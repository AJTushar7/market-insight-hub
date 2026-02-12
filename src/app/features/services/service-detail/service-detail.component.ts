import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <a routerLink="/services" class="back-link">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Services
        </a>
        <h1>Premium Advisory Service</h1>
        <p>Detailed description of this service coming soon.</p>
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

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: $space-2;
          color: $text-secondary;
          font-size: $text-sm;
          text-decoration: none;
          margin-bottom: $space-6;

          &:hover {
            color: $primary-500;
          }
        }

        h1 {
          @include heading-1;
          margin-bottom: $space-4;
        }

        p {
          @include body-large;
          color: $text-secondary;
        }
      }
    `,
  ],
})
export class ServiceDetailComponent {
  constructor(private route: ActivatedRoute) {}
}
