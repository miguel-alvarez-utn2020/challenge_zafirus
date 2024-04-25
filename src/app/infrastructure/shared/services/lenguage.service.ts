import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CapacitorService } from '../../drivers/capacitor.service';

@Injectable({
  providedIn: 'root'
})
export class LenguageService {
  private translateService = inject(TranslateService);
  private capacitorService = inject(CapacitorService);
  constructor() { }


  async setLanguage(){
    this.capacitorService.getDeviceLenguage().then(({ value }) => {
      const lenguage = value.split("-")[0];
      this.translateService.setDefaultLang(lenguage);
      this.translateService.use(lenguage);
      localStorage.setItem('language', lenguage);
    })
  }

}
