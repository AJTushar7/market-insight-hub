import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  /**
   * Track a custom event in Google Analytics 4
   * @param eventName - The name of the event (e.g., 'whatsapp_click', 'email_click')
   * @param eventParams - Additional parameters for the event
   */
  trackEvent(eventName: string, eventParams: Record<string, any> = {}) {
    try {
      if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventParams);
      }
    } catch (e) {
      console.warn('Analytics not available:', e);
    }
  }

  /**
   * Track WhatsApp button click
   */
  trackWhatsAppClick(source: string = 'floating_button') {
    this.trackEvent('whatsapp_click', {
      event_category: 'engagement',
      event_label: source,
      contact_number: '9999999999',
    });
  }

  /**
   * Track email link click
   */
  trackEmailClick(source: string = 'footer') {
    this.trackEvent('email_click', {
      event_category: 'engagement',
      event_label: source,
    });
  }

  /**
   * Track phone call click
   */
  trackPhoneClick(source: string = 'footer') {
    this.trackEvent('phone_click', {
      event_category: 'engagement',
      event_label: source,
    });
  }

  /**
   * Track page view
   */
  trackPageView(pagePath: string, pageTitle: string) {
    try {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
          page_path: pagePath,
          page_title: pageTitle,
        });
      }
    } catch (e) {
      console.warn('Analytics not available:', e);
    }
  }

  /**
   * Track service card click
   */
  trackServiceClick(serviceName: string) {
    this.trackEvent('service_click', {
      event_category: 'engagement',
      event_label: serviceName,
    });
  }

  /**
   * Track course card click
   */
  trackCourseClick(courseName: string) {
    this.trackEvent('course_click', {
      event_category: 'engagement',
      event_label: courseName,
    });
  }

  /**
   * Track CTA button click
   */
  trackCTAClick(ctaName: string, source: string) {
    this.trackEvent('cta_click', {
      event_category: 'conversion',
      event_label: ctaName,
      source: source,
    });
  }

  /**
   * Track social link click
   */
  trackSocialClick(platform: string) {
    this.trackEvent('social_click', {
      event_category: 'engagement',
      event_label: platform,
    });
  }
}
