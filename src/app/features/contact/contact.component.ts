import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Have questions? We'd love to hear from you.</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>We're here to help. Reach out to us through any of the channels below.</p>

            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </div>
                <div class="method-details">
                  <h4>Phone</h4>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon whatsapp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    />
                  </svg>
                </div>
                <div class="method-details">
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/919876543210" target="_blank">Chat with us</a>
                </div>
              </div>

              <div class="contact-method">
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
                  <a href="mailto:support@risingstockofindia.com"
                    >support&#64;risingstockofindia.com</a
                  >
                </div>
              </div>

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
            <h2>Send us a Message</h2>
            <form class="contact-form" (submit)="$event.preventDefault()">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number *</label>
                  <input type="tel" id="phone" placeholder="+91 98765 43210" required />
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" placeholder="your@email.com" required />
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <select id="subject">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="services">Service Information</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn-submit">
                Send Message
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
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
        gap: $space-5;
        margin-bottom: $space-8;
      }

      .contact-method {
        display: flex;
        align-items: flex-start;
        gap: $space-4;
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
          background: rgba(#25d366, 0.1);
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
        @include button-primary;
        width: 100%;
        padding: $space-4;
        font-size: $text-base;

        svg {
          transition: transform $duration-200 $ease-smooth;
        }

        &:hover svg {
          transform: translateX(4px);
        }
      }
    `,
  ],
})
export class ContactComponent {}
