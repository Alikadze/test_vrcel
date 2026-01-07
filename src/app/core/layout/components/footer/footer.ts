import { Component, inject } from '@angular/core';
import { InputTextModule } from "primeng/inputtext";
import { Button } from "../../../../shared/button/button";
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";
import { Divider } from 'primeng/divider';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [
    InputTextModule,
    Button,
    NgOptimizedImage,
    Divider,
    TranslatePipe
],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly _router = inject(Router);

  navPages = [
    {
      label: 'Home',
      route: '/home'
    },
    {
      label: 'About Us',
      route: '/about-us'
    },
    {
      label: 'Services',
      route: '/services'
    },
    {
      label: 'Contact Us',
      route: '/contact-us'
    }
  ]

  socialMedia = [
    {
      icon: '/assets/icons/footer/facebook.svg',
      alt: 'Facebook',
    },
    {
      icon: '/assets/icons/footer/X.svg',
      alt: 'X',
    },
    {
      icon: '/assets/icons/footer/instagram.svg',
      alt: 'Instagram',
    },
    {
      icon: '/assets/icons/footer/linkedIn.svg',
      alt: 'LinkedIn',
    }
  ]

  additionalInfo = [
    {
      label: "+1 919-555-824",
      icon: "pi-phone"
    },
    {
      label: "221B Baker Street, London NW1 6XE, United Kingdom",
      icon: "pi-map-marker"
    },
    {
      label: "support@blackit.com",
      icon: "pi-envelope"
    }
  ]

  policyInfo = [
    // {
    //   label: "Cookies Policy",
    // },
    // {
    //   label: "Rules of Use",
    // },
    {
      label: "Privacy Policy",
    }
  ]

  navTo(path: string): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this._router.navigate([path]);
  }
}
