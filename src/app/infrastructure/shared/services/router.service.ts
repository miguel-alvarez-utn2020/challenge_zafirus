import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private router = inject(Router);
  constructor() { }

  navigateTo(route: string, param?: number){
    this.router.navigate([route]);
  }
}
