import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'movie-list',
    loadChildren: () => import('./ui/pages/movie-list/movie-list.module').then( m => m.MovieListPageModule)
  },
  {
    path: '',
    redirectTo: 'movie-list',
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
