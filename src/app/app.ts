import { Component, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { WhatsappButtonComponent } from './shared/components/whatsapp-button/whatsapp-button.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { AnalyticsService } from './shared/services/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, WhatsappButtonComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-whatsapp-button />
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
      }
      main {
        min-height: 100vh;
        padding-top: 64px;
        display: block;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private analytics = inject(AnalyticsService);

  constructor() {
    console.log('AppComponent constructed');
  }

  ngOnInit() {
    console.log('AppComponent initialized');
    // Track page views on route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const navEvent = event as NavigationEnd;
        this.analytics.trackPageView(navEvent.urlAfterRedirects, document.title);
      });
  }
}
