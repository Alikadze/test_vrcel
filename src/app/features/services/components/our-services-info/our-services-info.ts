import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-our-services-info',
  imports: [TranslatePipe, Carousel],
  templateUrl: './our-services-info.html',
  styleUrl: './our-services-info.scss',
})
export class OurServicesInfo {
  autoplayInterval = 0;

  carouselInfo = [
    {
      alt: 'About Us - Group Photo',
      title: 'Web Development Services UK | Custom Websites by Black IT',
      description:
        "Explore Black IT's web development services including custom website design, CMS based development, and ongoing website support."
    },
    {
      alt: 'We Build With Intention, Not Ego',
      title: 'Services Built for Businesses Tired of Rebuilding Their Website',
      description:
        "Most businesses don't fail online because of bad ideas. They fail because their website was rushed, overdesigned, or built without understanding how customers actually behave. Black IT provides custom web development services that focus on structure, clarity, and performance first, so your website does its job properly from day one."
    },
    // {
    //   alt: 'About Us - Company',
    //   title: 'About Us',
    //   description:
    //     'Black IT builds scalable digital products driven by clean engineering and human-centered design. We turn ideas into intuitive, secure, and high performing solutions that support real users and business growth. Purposeful innovation and reliable execution define everything we build.'
    // }
  ];
}
