import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeroService } from 'src/app/aplication/core/hero.service';
import { Hero } from 'src/app/aplication/domain/hero/hero.interface';
import { ToastStyles } from 'src/app/aplication/domain/toast/toast.enum';
import { CapacitorService } from 'src/app/infrastructure/drivers/capacitor.service';
import { listAnimation } from 'src/app/infrastructure/shared/animation/hero-list';
import { LenguageService } from 'src/app/infrastructure/shared/services/lenguage.service';
import { RouterService } from 'src/app/infrastructure/shared/services/router.service';
import { StorageService } from 'src/app/infrastructure/shared/services/storage.service';
import { ToastService } from 'src/app/infrastructure/shared/services/toast.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.page.html',
  styleUrls: ['./hero-list.page.scss'],
  animations: [
   listAnimation
  ]
})
export class HeroListPage implements OnInit {
  private heroService = inject(HeroService);
  private routerService = inject(RouterService)
  private translate = inject(TranslateService);
  private storageService = inject(StorageService);
  private toastService = inject(ToastService);

  public characters = signal<Hero[]>([]);

 
  constructor() {}

  async ngOnInit() {
    this.translate.use(this.storageService.getItem('language')!);
    this.getCharacters();
  }

 
  goToDetail(heroId: number){
      this.storageService.setItem('heroId', heroId);
      this.routerService.navigateTo(`hero-list/detail/${heroId}`);
  }

  getCharacters(){
    this.heroService.getHeros().subscribe({
      next: (apiResponse: Hero[]) => {
        console.log(apiResponse);
        this.characters.set(apiResponse);
      },
      error: () => {
          this.toastService.presentToast('heroListPage.apiError', ToastStyles.ERROR);
      }
    })
  }


}
