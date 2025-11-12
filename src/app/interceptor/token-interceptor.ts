// token-interceptor.ts
// --------------------
// Intercepts every outgoing HTTP request and attaches an Authorization header if a token exists.
// This ensures all API calls after login are authenticated.

import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;

  // Retrieve saved token from local storage
  const token = localStorage.getItem("angular20Token");

  // Clone the request and attach the Bearer token in the header
  const newReq = req.clone({
    setHeaders: {
      // Use template literal correctly with backticks
      Authorization: `Bearer ${token}`
    }
  });
  
  // Pass modified request to the next handler
  return next(newReq);
};

/*
  Relation:
  - The token saved during login in logintwo-component.ts is used here.
  - Automatically adds Authorization header for authenticated routes or API calls.
  - Configured in app.config.ts under provideHttpClient().
*/
