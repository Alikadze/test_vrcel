import { Component, inject, signal } from '@angular/core';
import { NgClass, NgOptimizedImage } from "@angular/common";
import { Button } from "../../../../shared/button/button";
import { Router, RouterLink } from "@angular/router";
import { PopoverModule } from 'primeng/popover';
import { ButtonModule } from 'primeng/button';
import { Divider } from 'primeng/divider';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    Button,
    NgClass,
    PopoverModule,
    ButtonModule,
    Divider,
    RouterLink,
    TranslatePipe
],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly _router = inject(Router);
  private readonly _translateService = inject(TranslateService);

  currentLanguage: 'en' | 'ro' = 'ro';
  selectedLanguage = signal<'en' | 'ro'>('ro');

  isActive(page: string): boolean {
    const currentUrl = this._router.url;

    switch (page) {
      case '/home':
        return currentUrl === '/home';
      case '/about-us':
        return currentUrl.startsWith('/about-us');
      case '/services':
        return currentUrl.startsWith('/services');
      case '/contact-us':
        return currentUrl.startsWith('/contact-us');
      default:
        return false;
    }
  }

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
    }
  ]

  navTo(path: string): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this._router.navigate([path]);
  }

  languages!: Array<{ label: string; name: 'en' | 'ro' }>;

  setLanguage(language: 'en' | 'ro'): void {
    if (this.currentLanguage === language) {
      return;
    }

    this.currentLanguage = language;
    this.selectedLanguage.set(language);
    this._translateService.use(language);

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }

  changeLanguage(): void {
    this.setLanguage(this.selectedLanguage());
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLanguage === 'en' ? 'ro' : 'en');
  }

  ngOnInit() {
    this.languages = [
      {
        label: 'Romanian',
        name: 'ro'
      },
      {
        label: 'English',
        name: 'en'
      }
    ]

    if (typeof localStorage === 'undefined') {
      return;
    }

    const storedLanguage = localStorage.getItem('language');
    const defaultLanguage: 'en' | 'ro' = storedLanguage === 'en' || storedLanguage === 'ro' ? storedLanguage : 'ro';

    this.currentLanguage = defaultLanguage;
    this.selectedLanguage.set(defaultLanguage);

    this._translateService.addLangs(this.languages.map(lang => lang.name));
    this._translateService.setFallbackLang(defaultLanguage);
    if (this._translateService.currentLang !== defaultLanguage) {
      this._translateService.use(defaultLanguage);
    }
  }
}
