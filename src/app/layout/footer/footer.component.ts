import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '../../shared/services/analytics.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private analytics = inject(AnalyticsService);

  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Courses', path: '/courses' },
    { label: 'Tools', path: '/tools' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  serviceLinks = [
    { label: 'Premium Advisory', path: '/services/premium-advisory' },
    { label: 'Stock Courses', path: '/courses' },
    { label: 'Portfolio Review', path: '/services/portfolio-review' },
    { label: 'Single Share Advice', path: '/services/single-share' },
    { label: 'Offline Workshop', path: '/services/offline-workshop' },
  ];

  legalLinks = [
    { label: 'Terms & Conditions', path: '/legal/terms' },
    { label: 'Privacy Policy', path: '/legal/privacy' },
    { label: 'Disclaimer', path: '/legal/disclaimer' },
    { label: 'Refund Policy', path: '/legal/refund' },
    { label: 'Complaints', path: '/legal/complaints' },
  ];

  socialLinks = [
    { icon: 'twitter', url: 'https://twitter.com/risingstockindia', label: 'Twitter' },
    { icon: 'instagram', url: 'https://instagram.com/risingstockindia', label: 'Instagram' },
    { icon: 'youtube', url: 'https://youtube.com/@risingstockindia', label: 'YouTube' },
    { icon: 'telegram', url: 'https://t.me/risingstockindia', label: 'Telegram' },
  ];

  onWhatsAppClick() {
    this.analytics.trackWhatsAppClick('footer');
  }

  onEmailClick() {
    this.analytics.trackEmailClick('footer');
  }

  onPhoneClick() {
    this.analytics.trackPhoneClick('footer');
  }

  onSocialClick(platform: string) {
    this.analytics.trackSocialClick(platform);
  }
}
