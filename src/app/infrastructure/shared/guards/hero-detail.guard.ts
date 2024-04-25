import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { catchError, map, of } from 'rxjs';

import { RouterService } from '../services/router.service';
import { StorageService } from '../services/storage.service';


export const heroDetailGuard: CanActivateFn = (route, state) => {
  
  const storageService = inject(StorageService);
  const routerService = inject(RouterService);
  const heroId = storageService.getItem('heroId');
  if(!heroId){
    routerService.navigateTo('/hero-list')
    return false;
  }
  return true;
};
