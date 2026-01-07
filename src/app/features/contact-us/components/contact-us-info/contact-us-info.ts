import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-contact-us-info',
  imports: [NgOptimizedImage, TranslatePipe, Carousel],
  templateUrl: './contact-us-info.html',
  styleUrl: './contact-us-info.scss',
})
export class ContactUsInfo {
  autoplayInterval = 5000;

  carouselInfo = [
    {
      alt: 'Contact Black IT | Talk to a Trusted IT Partner',
      title: 'Contact Black IT | Talk to a Trusted IT Partner',
      description:
        'Get in touch with Black IT to discuss your website, challenges, and next steps with a trusted IT partner in the UK.'
    },
    {
      title: "Let's Talk Before You Rebuild It Again",
      description:
        'Most website conversations start too late, after time, money, or patience has already been wasted. Use this space to tell us what is not working, what feels unclear, or what you are tired of fixing. We will ask direct questions, give honest answers, and help you decide whether building something new actually makes sense.'
    },
  ];
}
