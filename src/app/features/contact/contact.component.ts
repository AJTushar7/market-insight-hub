import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalyticsService } from '../../shared/services/analytics.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimateDirective],
  template: `
    <section class="page-hero" appScrollAnimate>
      <div class="container">
        <h1>Contact Us</h1>
        <p>Have questions? We'd love to hear from you.</p>
      </div>
    </section>

    <section class="partners-hero" appScrollAnimate>
      <div class="container">
        <h2>Our Expert Team</h2>
        <p>Led by Chartered Accountants with deep market expertise.</p>
        <div class="partners-grid">
          <div class="partner-card">
            <div class="partner-avatar">KM</div>
            <h3>CA Keshav Mittal</h3>
            <p>Expert in Intraday & F&O</p>
          </div>
          <div class="partner-card">
            <div class="partner-avatar">MA</div>
            <h3>CA Mohit Aggarwal</h3>
            <p>Commodity Market Specialist</p>
          </div>
          <div class="partner-card">
            <div class="partner-avatar">CD</div>
            <h3>CA Dipesh</h3>
            <p>Strategic Advisor</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-content" appScrollAnimate>
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>We're here to help. Reach out to us through any of the channels below.</p>

            <div class="contact-methods">
              <a
                href="https://wa.me/919999999999?text=Hi!%20I%20am%20interested%20in%20your%20stock%20advisory%20services."
                target="_blank"
                rel="noopener noreferrer"
                class="contact-method highlight"
                (click)="onWhatsAppClick()"
              >
                <div class="method-icon whatsapp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    />
                  </svg>
                </div>
                <div class="method-details">
                  <h4>WhatsApp (Fastest)</h4>
                  <span>Chat with us instantly</span>
                  <span class="method-cta">Open WhatsApp →</span>
                </div>
              </a>

              <a href="tel:+919999999999" class="contact-method" (click)="onPhoneClick()">
                <div class="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </div>
                <div class="method-details">
                  <h4>Phone</h4>
                  <span>+91 99999 99999</span>
                </div>
              </a>

              <a
                href="mailto:support@risingstockofindia.com"
                class="contact-method"
                (click)="onEmailClick()"
              >
                <div class="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="method-details">
                  <h4>Email</h4>
                  <span>support&#64;risingstockofindia.com</span>
                </div>
              </a>

              <div class="contact-method">
                <div class="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div class="method-details">
                  <h4>Office</h4>
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div class="working-hours">
              <h4>Working Hours</h4>
              <p>Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <h2>Send us a Message via WhatsApp</h2>
            <p class="form-subtitle">
              Fill the form and it will open WhatsApp with your message pre-filled.
            </p>
            <form class="contact-form" (submit)="onSubmit($event)">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    [(ngModel)]="contactName"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    [(ngModel)]="contactPhone"
                    name="phone"
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <select id="subject" [(ngModel)]="contactSubject" name="subject">
                  <option value="">Select a subject</option>
                  <option value="Intraday Trading">Intraday Trading</option>
                  <option value="Future & Options">Future & Options</option>
                  <option value="Commodity Trading">Commodity Trading</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Service Information">Service Information</option>
                  <option value="Portfolio Review">Portfolio Review</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  [(ngModel)]="contactMessage"
                  rows="5"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn-submit">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
                Send via WhatsApp
              </button>
            </form>
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

      .partners-hero {
        padding: $space-12 0 $space-8;
        background: $bg-secondary;

        h2 {
          font-size: $text-2xl;
          margin-bottom: $space-2;
        }
        p {
          color: $text-secondary;
          margin-bottom: $space-8;
        }
      }

      .partners-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: $space-6;
        margin-top: $space-8;
      }

      .partner-card {
        @include card;
        padding: $space-6;
        text-align: center;
        background: $bg-primary;

        .partner-avatar {
          width: 64px;
          height: 64px;
          border-radius: $radius-full;
          background: rgba($primary-500, 0.1);
          color: $primary-500;
          @include flex-center;
          font-weight: $font-bold;
          font-size: $text-xl;
          margin: 0 auto $space-4;
        }

        h3 {
          font-size: $text-lg;
          margin-bottom: $space-1;
          font-weight: $font-semibold;
        }
        p {
          font-size: $text-sm;
          color: $text-secondary;
          margin: 0;
        }
      }

      .contact-content {
        @include section-padding;
      }

      .contact-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: $space-12;

        @include lg {
          grid-template-columns: 1fr 1.2fr;
        }
      }

      .contact-info {
        h2 {
          font-size: $text-2xl;
          margin-bottom: $space-3;
        }

        > p {
          color: $text-secondary;
          margin-bottom: $space-8;
        }
      }

      .contact-methods {
        display: flex;
        flex-direction: column;
        gap: $space-4;
        margin-bottom: $space-8;
      }

      .contact-method {
        display: flex;
        align-items: flex-start;
        gap: $space-4;
        padding: $space-4;
        border-radius: $radius-xl;
        text-decoration: none;
        transition: $transition-fast;
        border: 1px solid transparent;

        &:hover {
          background: $bg-tertiary;
          text-decoration: none;
        }

        &.highlight {
          background: rgba(#25d366, 0.05);
          border-color: rgba(#25d366, 0.2);

          &:hover {
            background: rgba(#25d366, 0.1);
            border-color: rgba(#25d366, 0.4);
            transform: translateY(-2px);
            box-shadow: 0 4px 20px rgba(#25d366, 0.15);
          }
        }
      }

      .method-icon {
        width: 48px;
        height: 48px;
        @include flex-center;
        background: $bg-tertiary;
        border-radius: $radius-xl;
        flex-shrink: 0;

        svg {
          width: 24px;
          height: 24px;
          color: $primary-500;
        }

        &.whatsapp {
          background: rgba(#25d366, 0.15);
          svg {
            color: #25d366;
          }
        }
      }

      .method-details {
        h4 {
          font-size: $text-sm;
          font-weight: $font-semibold;
          color: $text-primary;
          margin-bottom: $space-1;
        }

        a,
        span {
          font-size: $text-sm;
          color: $text-secondary;
          text-decoration: none;
        }

        a:hover {
          color: $primary-500;
        }

        .method-cta {
          display: block;
          margin-top: $space-1;
          font-weight: $font-semibold;
          color: #25d366;
          font-size: $text-sm;
        }
      }

      .working-hours {
        padding: $space-5;
        background: $bg-secondary;
        border-radius: $radius-xl;
        border: 1px solid $border-light;

        h4 {
          font-size: $text-base;
          margin-bottom: $space-3;
        }

        p {
          font-size: $text-sm;
          color: $text-secondary;
          margin-bottom: $space-1;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      .contact-form-wrapper {
        @include card;

        h2 {
          font-size: $text-xl;
          margin-bottom: $space-2;
        }

        .form-subtitle {
          font-size: $text-sm;
          color: $text-muted;
          margin-bottom: $space-6;
        }
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr;
        gap: $space-4;

        @include sm {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      .form-group {
        margin-bottom: $space-4;

        label {
          display: block;
          font-size: $text-sm;
          font-weight: $font-medium;
          color: $text-primary;
          margin-bottom: $space-2;
        }

        input,
        select,
        textarea {
          @include input-base;
        }

        select {
          cursor: pointer;
        }
      }

      .btn-submit {
        @include button-base;
        width: 100%;
        padding: $space-4;
        font-size: $text-base;
        background: #25d366;
        color: white;
        border: none;
        gap: $space-2;

        &:hover {
          background: #20ba5c;
          box-shadow: 0 4px 20px rgba(#25d366, 0.3);
          transform: translateY(-2px);
        }
      }
    `,
  ],
})
export class ContactComponent {
  private analytics = inject(AnalyticsService);

  contactName = '';
  contactPhone = '';
  contactSubject = '';
  contactMessage = '';

  onWhatsAppClick() {
    this.analytics.trackWhatsAppClick('contact_page');
  }

  onEmailClick() {
    this.analytics.trackEmailClick('contact_page');
  }

  onPhoneClick() {
    this.analytics.trackPhoneClick('contact_page');
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (!this.contactName || !this.contactMessage) {
      return;
    }

    // Build WhatsApp message from form data
    let message = `Hi! I'm ${this.contactName}.`;
    if (this.contactPhone) {
      message += `\nMy phone: ${this.contactPhone}`;
    }
    if (this.contactSubject) {
      message += `\nSubject: ${this.contactSubject}`;
    }
    message += `\n\n${this.contactMessage}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919999999999?text=${encodedMessage}`;

    this.analytics.trackEvent('contact_form_submit', {
      event_category: 'conversion',
      event_label: this.contactSubject || 'general',
      source: 'contact_page',
    });

    window.open(whatsappUrl, '_blank');
  }
}
