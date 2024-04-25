import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeroService } from 'src/app/aplication/core/hero.service';
import { Hero, HeroFeature } from 'src/app/aplication/domain/hero/hero.interface';
import { ToastStyles } from 'src/app/aplication/domain/toast/toast.enum';
import { detailAnimation } from 'src/app/infrastructure/shared/animation/hero-detail';
import { StorageService } from 'src/app/infrastructure/shared/services/storage.service';
import { ToastService } from 'src/app/infrastructure/shared/services/toast.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
  animations: [
    detailAnimation
  ]
})

export class HeroDetailPage implements OnInit, OnDestroy {
  private translate = inject(TranslateService);

  private heroService = inject(HeroService);
  private storageService = inject(StorageService);
  private toastService = inject(ToastService);
  public hero: Hero  = {} as Hero;
  public heroFeatures: HeroFeature[] = [] 
  urlImage: string = ''
  heroId!: number;
  loaded: boolean = false;
  
  constructor(private route: ActivatedRoute) { 
    this.translate.use(this.storageService.getItem('language')!);
    this.getQueryParamId();
  }
 

  ngOnInit() {
    this.getHeroById();
  }

  getQueryParamId(){
    this.route.params.subscribe((params: Params) => this.heroId = params['id']);
  }

  getHeroById(){
    this.heroService.getHeroById(this.heroId).subscribe({
      next: (hero: any) => {
        if(hero){
          this.hero = hero;
          this.loaded = true;
          this.buildFeatures();
          this.buildUrlImg(hero.thumbnail.path, hero.thumbnail.extension);
        }
      },
      error: () => {
        this.toastService.presentToast('detailPage.apiError', ToastStyles.ERROR);
      }
    })
  }

  buildUrlImg(path: string, extension: string){
    this.urlImage = `${path}.${extension}`
  }

  buildFeatures(){
    this.heroFeatures = [
      {
        featureLabel: 'detailPage.numberComics',
        featureNumber: this.hero.comics.items.length
      },
      {
        featureLabel: 'detailPage.numberSeries',
        featureNumber: this.hero.series.items.length
      },
      {
        featureLabel: 'detailPage.numberStories',
        featureNumber: this.hero.stories.items.length
      },
    ]
  }

  ngOnDestroy(): void {
    this.storageService.removeItem('heroId');
  }
}
