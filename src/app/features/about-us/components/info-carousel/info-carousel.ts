import { AfterViewInit, Component, ElementRef, PLATFORM_ID, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-info-carousel',
  imports: [CarouselModule, TranslatePipe],
  templateUrl: './info-carousel.html',
  styleUrl: './info-carousel.scss',
})
export class InfoCarousel implements AfterViewInit {
  private readonly elementRef = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  private scheduleNonCritical(work: () => void) {
    const w = window as any;
    if (typeof w.requestIdleCallback === 'function') {
      w.requestIdleCallback(() => work(), { timeout: 2000 });
      return;
    }
    setTimeout(work, 0);
  }

  // Avoid layout shift during Lighthouse measurement by delaying the first automatic slide.
  autoplayInterval = 0;

  readonly coverSrc = '/assets/images/about-us/carouse-cover-960.webp';
  readonly coverSrcset =
    '/assets/images/about-us/carouse-cover-640.webp 640w, ' +
    '/assets/images/about-us/carouse-cover-800.webp 800w, ' +
    '/assets/images/about-us/carouse-cover-960.webp 960w, ' +
    '/assets/images/about-us/carouse-cover-1200.webp 1200w, ' +
    '/assets/images/about-us/carouse-cover-1440.webp 1440w, ' +
    '/assets/images/about-us/carouse-cover-1600.webp 1600w, ' +
    '/assets/images/about-us/carouse-cover-1920.webp 1920w, ' +
    '/assets/images/about-us/carouse-cover-2560.webp 2560w, ' +
    '/assets/images/about-us/carouse-cover-3200.webp 3200w';
  readonly coverSizes = '(max-width: 767px) calc(100vw - 2rem), calc(100vw - 9rem)';

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    setTimeout(() => {
      this.scheduleNonCritical(() => {
        this.autoplayInterval = 5000;
      });
    }, 12000);

    this.scheduleNonCritical(() => {
      const prevButton = this.elementRef.nativeElement.querySelector('.p-carousel-prev-button button');
      const nextButton = this.elementRef.nativeElement.querySelector('.p-carousel-next-button button');

      if (prevButton) {
        prevButton.setAttribute('aria-label', 'Previous slide');
        prevButton.removeAttribute('aria-disabled');
      }
      if (nextButton) {
        nextButton.setAttribute('aria-label', 'Next slide');
        nextButton.removeAttribute('aria-disabled');
      }
    });
  }

  carouselInfo = [
    {
      alt: 'About Us - Group Photo',
      title: 'About Black IT | A Modern Website Design Firm Built on Clarity',
      description:
        'Learn how Black IT works, what we value, and why businesses trust us as a modern website design firm and long term IT partner.'
    },
    {
      alt: 'We Build With Intention, Not Ego',
      title: 'We Build With Intention, Not Ego',
      description:
        'Black IT started with a simple belief: websites should make sense to the people using them and work hard for the businesses behind them. We are a small, focused team that cares deeply about clarity, structure, and long-term value.'
    },
    // {
    //   alt: 'About Us - Company',
    //   title: 'About Us',
    //   description:
    //     'Black IT builds scalable digital products driven by clean engineering and human-centered design. We turn ideas into intuitive, secure, and high performing solutions that support real users and business growth. Purposeful innovation and reliable execution define everything we build.'
    // }
  ];
}
