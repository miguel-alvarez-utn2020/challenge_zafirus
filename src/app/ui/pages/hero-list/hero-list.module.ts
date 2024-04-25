import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeroListPageRoutingModule } from './hero-list-routing.module';
import { HeroListPage } from './hero-list.page';
import { ComponentsModule } from '@app/shared/components';
import { ItemHeroListComponent } from './components/item-hero-list/item-hero-list.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';


@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroListPageRoutingModule,
    ComponentsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    
  ],
  declarations: [HeroListPage, ItemHeroListComponent, HeroDetailComponent]
})
export class HeroListPageModule {}
