import { AfterViewInit, Component, ElementRef, PLATFORM_ID, inject, input } from '@angular/core';
import { CommentCard } from "../comment-card/comment-card";
import { CarouselModule } from 'primeng/carousel';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-comments',
  imports: [CommentCard, CarouselModule, TranslatePipe],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
})
export class Comments implements AfterViewInit {
  commentsInfo = input.required<Array<{ name: string; comment: string; avatarSrc: string }>>();

  private platformId = inject(PLATFORM_ID);
  constructor(private elementRef: ElementRef) {}

  private scheduleNonCritical(work: () => void) {
    const w = window as any;
    if (typeof w.requestIdleCallback === 'function') {
      w.requestIdleCallback(() => work(), { timeout: 2000 });
      return;
    }
    setTimeout(work, 0);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.scheduleNonCritical(() => {
        const prevButton = this.elementRef.nativeElement.querySelector('.p-carousel-prev-button button');
        const nextButton = this.elementRef.nativeElement.querySelector('.p-carousel-next-button button');

        if (prevButton) {
          prevButton.setAttribute('aria-label', 'Previous comment');
          prevButton.removeAttribute('aria-disabled');
        }
        if (nextButton) {
          nextButton.setAttribute('aria-label', 'Next comment');
          nextButton.removeAttribute('aria-disabled');
        }
      });
    }
  }
}
