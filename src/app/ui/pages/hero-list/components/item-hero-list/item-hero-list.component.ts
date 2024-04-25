import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/aplication/domain/hero/hero.interface';

@Component({
  selector: 'app-item-hero-list',
  templateUrl: './item-hero-list.component.html',
  styleUrls: ['./item-hero-list.component.scss'],
})
export class ItemHeroListComponent  implements OnInit {

  @Input() hero: Hero = {} as Hero;
  @Output() emitHeroSelected: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {}

  goToDetail(heroId: number){
    this.emitHeroSelected.emit(heroId)
  }

}
