import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResources } from 'src/app/aplication/domain/hero/hero.enum';
import { Hero } from 'src/app/aplication/domain/hero/hero.interface';
import { HeroPort } from 'src/app/aplication/ports/hero.port';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroHttpService implements HeroPort{
  private httpClient = inject(HttpClient);
  constructor() { }
  
  getHeroById(heroId: number): Observable<Hero> {
    return this.httpClient.get<Hero[]>(`${environment.baseUrl}${ApiResources.GET_HERO}/${heroId}`).pipe(
      map((apiResponse: any) => apiResponse.data.results[0])
    );
  }


  getHeros(): Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(`${environment.baseUrl}${ApiResources.GET_HEROS}`).pipe(
      map((apiResponse: any) => apiResponse.data.results)
    );
  };


}
