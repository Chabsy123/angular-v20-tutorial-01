// app.config.ts
// --------------
// Global application configuration file.
// Provides core Angular services, HTTP client setup, and route configuration.
// The token interceptor is also registered here to attach authorization headers automatically.

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './interceptor/token-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // Handles uncaught errors across the app
    provideBrowserGlobalErrorListeners(),

    // Improves performance by optimizing change detection
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Sets up app routing using the routes defined in app.routes.ts
    provideRouter(routes),

    // Sets up HttpClient with an authorization interceptor
    provideHttpClient(withInterceptors([tokenInterceptor]))
  ]
};

// Relation:
// - This config ties together the routing, global error handling, and HTTP interceptors.
// - The tokenInterceptor automatically attaches the saved token (from login) to outgoing HTTP requests.
