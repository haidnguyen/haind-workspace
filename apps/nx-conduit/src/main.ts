import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { PreloadAllModules, provideRouter, Routes, withPreloading, withRouterConfig } from '@angular/router';
import { provideApiUrl } from '@haind-workspace/nx-conduit/data-access';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@haind-workspace/nx-conduit/ui-shell').then(m => m.LayoutComponent),
    loadChildren: () => import('@haind-workspace/nx-conduit/ui-shell').then(m => m.routes),
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withRouterConfig({ onSameUrlNavigation: 'reload' }), withPreloading(PreloadAllModules)),
    importProvidersFrom(HttpClientModule),
    provideApiUrl(environment.api),
  ],
}).catch(console.log.bind(console, 'Application bootstrap error: '));
