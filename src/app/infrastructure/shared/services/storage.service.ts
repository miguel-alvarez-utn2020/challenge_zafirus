import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  
  getItem(key: string, parse: boolean = false){
    return parse ? JSON.parse(localStorage.getItem(key)!): localStorage.getItem(key);
  }

  setItem(key: string, value: any){
    const stringValue = typeof value !== 'string'? JSON.stringify(value) : value;
    localStorage.setItem(key, stringValue);
  }

  removeItem(key: string){
    localStorage.removeItem(key);
  }

  clear(){
    localStorage.clear;
  }
}
