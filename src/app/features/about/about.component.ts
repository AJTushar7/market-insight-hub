import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>About Us</h1>
        <p>Your trusted partner in navigating the Indian stock market.</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to democratize stock market knowledge in India, Rising Stock of
              India has been helping investors make informed decisions since 2018. As a SEBI
              Registered Research Analyst, we are committed to providing transparent, research-based
              investment guidance.
            </p>
            <p>
              Our team of experienced analysts combines fundamental and technical analysis to
              identify opportunities in the Indian equity markets. We believe in educating investors
              rather than just providing tips, empowering them to understand the "why" behind every
              recommendation.
            </p>

            <h3>Our Mission</h3>
            <p>
              To empower every Indian investor with the knowledge, tools, and guidance they need to
              build long-term wealth through smart, research-based investing.
            </p>

            <h3>Our Values</h3>
            <ul>
              <li>
                <strong>Transparency:</strong> Complete disclosure of our methodology and
                performance
              </li>
              <li>
                <strong>Education:</strong> Empowering investors to make their own informed
                decisions
              </li>
              <li>
                <strong>Compliance:</strong> Full adherence to SEBI regulations and investor
                protection
              </li>
              <li><strong>Integrity:</strong> Never compromising on ethics for short-term gains</li>
            </ul>
          </div>

          <div class="about-stats">
            <div class="stat-card">
              <span class="stat-value">15K+</span>
              <span class="stat-label">Happy Clients</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">8+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">95%</span>
              <span class="stat-label">Success Rate</span>
            </div>
            <div class="stat-card">
              <span class="stat-value">500+</span>
              <span class="stat-label">Recommendations</span>
            </div>
          </div>
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

      .about-content {
        @include section-padding;
      }

      .about-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: $space-12;

        @include lg {
          grid-template-columns: 2fr 1fr;
        }
      }

      .about-text {
        h2,
        h3 {
          margin-top: $space-8;

          &:first-child {
            margin-top: 0;
          }
        }

        ul {
          padding-left: $space-6;

          li {
            margin-bottom: $space-3;
          }
        }
      }

      .about-stats {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: $space-4;
        height: fit-content;
      }

      .stat-card {
        @include card;
        text-align: center;

        .stat-value {
          display: block;
          font-family: $font-heading;
          font-size: $text-3xl;
          font-weight: $font-bold;
          @include gradient-text;
          margin-bottom: $space-2;
        }

        .stat-label {
          font-size: $text-sm;
          color: $text-secondary;
        }
      }
    `,
  ],
})
export class AboutComponent {}
