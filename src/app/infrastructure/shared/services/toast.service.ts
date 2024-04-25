import { Injectable, inject } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ToastStyles } from 'src/app/aplication/domain/toast/toast.enum';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastController = inject(ToastController)
  private translateService = inject(TranslateService)

  async presentToast(translateKey: string, cssClass: string, position: 'top' | 'middle' | 'bottom' = 'bottom') {
    
    const toast = await this.toastController.create({
      message: this.translateService.instant(translateKey),
      duration: 1500,
      position: position,
      cssClass: cssClass
    });

    await toast.present();
  }

}
