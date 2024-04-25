import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemHeroListComponent } from './item-hero-list/item-hero-list.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { HeroCardSkeletonComponent } from './hero-card-skeleton/hero-card-skeleton.component';

const components = [ItemHeroListComponent, HeroCardComponent, HeroCardSkeletonComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [...components]
})
export class PageComponentsModule { }
