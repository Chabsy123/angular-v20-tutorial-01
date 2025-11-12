import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  console.log('authGuard');
  const router = inject(Router)

  const isLoggedIn = localStorage.getItem('angular20Token');

  if (!isLoggedIn !== null) {
    router.navigateByUrl('/logintwo');
    return true;
  } else {
    router.navigateByUrl('/logintwo');
  return true;
  }
};
