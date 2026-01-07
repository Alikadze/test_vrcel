import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.routes').then((m) => m.homeRoutes),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.routes').then((m) => m.homeRoutes),
      },
      {
        path: "about-us",
        loadChildren: () =>
          import('./features/about-us/about-us.routes').then((m) => m.aboutUsRoutes),
      },
      {
        path: "services",
        loadChildren: () =>
          import('./features/services/services.routes').then((m) => m.servicesRoutes),
      },
      {
        path: "contact-us",
        loadChildren: () =>
          import('./features/contact-us/contact-us.routes').then((m) => m.contactUsRoutes),
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];
