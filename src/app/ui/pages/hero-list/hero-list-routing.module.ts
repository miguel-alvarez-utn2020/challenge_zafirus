import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListPage } from './hero-list.page';
import { heroDetailGuard } from 'src/app/infrastructure/shared/guards';

const routes: Routes = [
  {
    path: '',
    component: HeroListPage,
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/hero-detail/hero-detail.module').then( m => m.HeroDetailPageModule),
    canActivate: [heroDetailGuard]
  },
  {
    path: '**',
    redirectTo: 'hero-list',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroListPageRoutingModule {}
