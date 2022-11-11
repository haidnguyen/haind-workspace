import { InjectionToken, Provider } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');

export const provideApiUrl = (apiUrl: string): Provider => ({
  provide: API_URL,
  useValue: apiUrl,
});
