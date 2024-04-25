import { Component, OnInit, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LenguageService } from './infrastructure/shared/services/lenguage.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  private languageService = inject(LenguageService)
  constructor() {}
  ngOnInit(): void {
    this.languageService.setLanguage();
  }
 


}
