import { Component, Input, OnInit } from '@angular/core';
import { HeroFeature } from 'src/app/aplication/domain/hero/hero.interface';
import { detailAnimation } from 'src/app/infrastructure/shared/animation/hero-detail';
import { listAnimation } from 'src/app/infrastructure/shared/animation/hero-list';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
  animations: [
    listAnimation,
    detailAnimation
    
  ]
})
export class HeroCardComponent  implements OnInit {

  @Input() urlImage: string = ''
  @Input() heroFeatures: HeroFeature[]  = [];

  constructor() { }

  ngOnInit() {

  }

}
