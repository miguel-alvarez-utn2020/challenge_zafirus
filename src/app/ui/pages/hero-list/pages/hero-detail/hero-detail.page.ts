import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeroService } from 'src/app/aplication/core/hero.service';
import { Hero } from 'src/app/aplication/domain/hero/hero.interface';
import { detailAnimation } from 'src/app/infrastructure/shared/animation/hero-detail';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
  animations: [
    detailAnimation
  ]
})

export class HeroDetailPage implements OnInit {
  private translate = inject(TranslateService);

  private heroService = inject(HeroService);
  public hero: Hero  = {} as Hero; 
  urlImage: string = ''
  heroId!: number;
  loaded: boolean = false;
  
  constructor(private route: ActivatedRoute) { 
    this.translate.use(localStorage.getItem('language')!);

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
          this.buildUrlImg(hero.thumbnail.path, hero.thumbnail.extension);
        }
      }
    })
  }

  buildUrlImg(path: string, extension: string){
    this.urlImage = `${path}.${extension}`
  }
}
