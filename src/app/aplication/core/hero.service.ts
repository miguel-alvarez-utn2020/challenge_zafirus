import { Injectable, inject } from '@angular/core';
import { HeroPort } from '../ports/hero.port';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HeroHttpService } from 'src/app/infrastructure/adapters/http/hero-http.service';
import { Hero } from '../domain/hero/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService implements HeroPort{
  private heroHttpService = inject(HeroHttpService);

  constructor() { }
  getHeros(): Observable<Hero[]> {
    return this.heroHttpService.getHeros()
  }

  getHeroById(heroId: number): Observable<Hero> {
    return this.heroHttpService.getHeroById(heroId)
  }


}
