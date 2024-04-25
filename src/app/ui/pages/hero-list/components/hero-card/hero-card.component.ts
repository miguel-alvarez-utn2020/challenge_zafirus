import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent  implements OnInit {

  @Input() urlImage: string = ''
  @Input() numberComics: number = 0;
  @Input() numberSeries: number = 0;
  @Input() numberStories:number  = 0;
  @Input() numberComicsLabel: string = '';
  @Input() numberSeriesLabel: string = '';
  @Input() numberStoriesLabel:string  ='';

  constructor() { }

  ngOnInit() {}

}
