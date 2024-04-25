import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from 'src/app/aplication/core/hero.service';
import { Hero } from 'src/app/aplication/domain/hero/hero.interface';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ])
  ]
})
export class HeroDetailComponent  implements OnInit {

  private heroService = inject(HeroService);
  public hero: Hero  = {} as Hero; 
  urlImage: string = ''
  heroId!: number;
  loaded: boolean = false;
  constructor(private route: ActivatedRoute) { 
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
