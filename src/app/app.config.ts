import { APP_INITIALIZER, ApplicationConfig, PLATFORM_ID, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslateLoader, provideTranslateService, TranslateService } from '@ngx-translate/core';
import { PublicAssetsTranslateLoader } from './core/services/public-assets-translate-loader';
import { firstValueFrom } from 'rxjs';

const initI18nFactory = (translate: TranslateService, platformId: object) => {
  return async () => {
    if (!isPlatformBrowser(platformId)) {
      return;
    }

    const storedLanguage = localStorage.getItem('language');
    const language: 'en' | 'ro' = storedLanguage === 'en' || storedLanguage === 'ro' ? storedLanguage : 'ro';

    translate.addLangs(['en', 'ro']);
    translate.setFallbackLang(language);

    await firstValueFrom(translate.use(language));
  };
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    })),
    provideClientHydration(withEventReplay()),

    provideHttpClient(withFetch()),

    providePrimeNG({
      theme: {
          preset: Lara
      }
    }),

    provideTranslateService({
      loader: provideTranslateLoader(PublicAssetsTranslateLoader),
    })
    ,

    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [TranslateService, PLATFORM_ID],
      useFactory: initI18nFactory,
    }
  ]
};
