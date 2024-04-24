import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


const component = [HeaderComponent]

@NgModule({
  declarations: [...component],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [...component]
})
export class ComponentsModule { }
