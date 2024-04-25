import { Injectable } from '@angular/core';
import { Device, LanguageTag } from '@capacitor/device';


@Injectable({
  providedIn: 'root'
})
export class CapacitorService {

  constructor() { }

  async getDeviceLenguage(): Promise<LanguageTag>{
    return await Device.getLanguageTag();
  }
}
