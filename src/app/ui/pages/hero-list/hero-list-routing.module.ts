import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListPage } from './hero-list.page';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HeroListPage,
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroListPageRoutingModule {}
