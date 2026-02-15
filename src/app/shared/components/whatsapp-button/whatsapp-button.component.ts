import { Component, signal, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
      [href]="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-button"
      [class.show]="showButton()"
      [class.expanded]="isExpanded()"
      (mouseenter)="isExpanded.set(true)"
      (mouseleave)="isExpanded.set(false)"
      (click)="trackWhatsAppClick()"
      aria-label="Chat on WhatsApp"
    >
      <div class="whatsapp-icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>
      </div>
      <span class="whatsapp-text">Chat with us</span>

      <!-- Ping Animation -->
      <span class="ping"></span>
    </a>
  `,
  styles: [
    `
      @use 'styles/variables' as *;
      @use 'styles/mixins' as *;

      .whatsapp-button {
        position: fixed;
        bottom: $space-6;
        right: $space-6;
        display: flex;
        align-items: center;
        gap: $space-3;
        padding: $space-4;
        background: #25d366;
        color: white;
        border-radius: $radius-full;
        text-decoration: none;
        box-shadow: $shadow-lg;
        z-index: $z-fixed;
        opacity: 0;
        transform: scale(0.8) translateY(20px);
        transition: all $duration-300 $ease-smooth;

        @include md {
          bottom: $space-8;
          right: $space-8;
        }

        &.show {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        &:hover {
          background: #20ba5c;
          box-shadow:
            $shadow-xl,
            0 0 30px rgba(#25d366, 0.5);
          transform: scale(1.05) translateY(-2px);
          text-decoration: none;
        }

        &.expanded {
          padding-right: $space-6;
          border-radius: $radius-2xl;

          .whatsapp-text {
            max-width: 150px;
            opacity: 1;
            margin-left: $space-2;
          }
        }
      }

      .whatsapp-icon {
        @include flex-center;
        width: 28px;
        height: 28px;
        flex-shrink: 0;

        svg {
          width: 100%;
          height: 100%;
        }
      }

      .whatsapp-text {
        font-size: $text-sm;
        font-weight: $font-semibold;
        white-space: nowrap;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        transition: all $duration-300 $ease-smooth;
      }

      .ping {
        position: absolute;
        top: 0;
        right: 0;
        width: 12px;
        height: 12px;
        background: $error-500;
        border-radius: $radius-full;
        animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;

        &::before {
          content: '';
          position: absolute;
          inset: 0;
          background: $error-500;
          border-radius: $radius-full;
          animation: ping-inner 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      }

      @keyframes ping {
        75%,
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }

      @keyframes ping-inner {
        0% {
          transform: scale(1);
        }
      }
    `,
  ],
})
export class WhatsappButtonComponent implements OnInit {
  private analytics = inject(AnalyticsService);

  whatsappUrl =
    'https://wa.me/919999999999?text=Hi!%20I%20am%20interested%20in%20your%20stock%20advisory%20services.%20Please%20share%20more%20details.';
  showButton = signal(false);
  isExpanded = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showButton.set(window.scrollY > 300);
  }

  ngOnInit() {
    // Show button after a short delay on page load
    setTimeout(() => {
      this.showButton.set(true);
    }, 2000);
  }

  trackWhatsAppClick() {
    this.analytics.trackWhatsAppClick('floating_button');
  }
}
