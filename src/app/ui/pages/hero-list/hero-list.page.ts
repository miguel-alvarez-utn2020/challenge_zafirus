import { Component, OnInit, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeroService } from 'src/app/aplication/core/hero.service';
import { Hero } from 'src/app/aplication/domain/hero/hero.interface';
import { CapacitorService } from 'src/app/infrastructure/drivers/capacitor.service';
import { RouterService } from 'src/app/infrastructure/shared/services/router.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.page.html',
  styleUrls: ['./hero-list.page.scss'],
})
export class HeroListPage implements OnInit {
  private heroService = inject(HeroService);
  private routerService = inject(RouterService)
  public characters = signal<Hero[]>([]);
  private translateService = inject(TranslateService);
  private capacitorService = inject(CapacitorService);

 
  constructor() { }

  ngOnInit() {
    this.getDeviceLenguage();
    this.getCharacters();
  }

 
  goToDetail(heroId: number){
      this.routerService.navigateTo(`hero-list/detail/${heroId}`);
  }

  getCharacters(){
    this.heroService.getHeros().subscribe({
      next: (apiResponse: Hero[]) => {
        console.log(apiResponse);
        this.characters.set(apiResponse);
      },
      error: () => {

      }
    })
  }


  async getDeviceLenguage(){
    this.capacitorService.getDeviceLenguage().then(({ value }) => {
      const lenguage = value.split("-")[0];
      this.translateService.setDefaultLang(lenguage);
    })
  }


}
