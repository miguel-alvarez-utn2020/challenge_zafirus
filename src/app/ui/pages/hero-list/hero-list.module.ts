import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { HeroListPageRoutingModule } from './hero-list-routing.module';
import { HeroListPage } from './hero-list.page';
import { ComponentsModule } from '@app/shared/components';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { PageComponentsModule } from '@app/pages/components';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroListPageRoutingModule,
    ComponentsModule,
    PageComponentsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    
  ],
  declarations: [HeroListPage]
})
export class HeroListPageModule {}
