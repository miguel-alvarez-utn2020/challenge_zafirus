import { Observable } from "rxjs";
import { Hero } from "../domain/hero/hero.interface";

export interface HeroPort {

    getHeros: () => Observable<Hero[]>;

    getHeroById: (heroId: number) => Observable<Hero>;
}