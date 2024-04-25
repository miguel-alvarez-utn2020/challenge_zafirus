import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hero-list',
    loadChildren: () => import('./ui/pages/hero-list/hero-list.module').then( m => m.HeroListPageModule)
  },
  {
    path: '**',
    redirectTo: 'hero-list',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
