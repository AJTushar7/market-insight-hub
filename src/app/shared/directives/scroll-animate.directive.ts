import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | undefined;

  @Input() threshold = 0.1;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.el.nativeElement.classList.add('reveal-on-scroll');

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.el.nativeElement.classList.add('is-visible');
              this.observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: this.threshold,
          rootMargin: '0px 0px -50px 0px',
        },
      );

      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
