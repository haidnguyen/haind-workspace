import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('@haind-workspace/nx-conduit/feature-home').then(m => m.HomePageComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('@haind-workspace/nx-conduit/feature-register').then(m => m.SignUpPageComponent),
  },
];
