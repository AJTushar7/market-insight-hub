import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);

  // Default to dark theme
  theme = signal<Theme>('dark');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // Check system preference first
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      
      // Load saved theme or use system preference
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) {
        this.theme.set(savedTheme);
      } else {
        this.theme.set(prefersDark.matches ? 'dark' : 'light');
      }

      // Listen for system theme changes
      prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          this.theme.set(e.matches ? 'dark' : 'light');
        }
      });

      // Apply theme on change
      effect(() => {
        const currentTheme = this.theme();
        if (currentTheme === 'light') {
          document.documentElement.classList.add('light-theme');
          document.documentElement.classList.remove('dark-theme');
          document.documentElement.style.setProperty('color-scheme', 'light');
        } else {
          document.documentElement.classList.add('dark-theme');
          document.documentElement.classList.remove('light-theme');
          document.documentElement.style.setProperty('color-scheme', 'dark');
        }
        localStorage.setItem('theme', currentTheme);
      });
    }
  }

  toggleTheme() {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }
}
