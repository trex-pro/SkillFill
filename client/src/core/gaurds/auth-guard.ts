import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account-service';
import { ToastService } from '../services/toast-service';

export const authGuard: CanActivateFn = () => {
  const accountService = inject(AccountService);
  const toastService = inject(ToastService);
  const router = inject(Router);

  if (accountService.currentUser()) return true;
  else {
    toastService.error("You are not Logged In.");
    router.navigateByUrl('/');
    return false;
  }
};
