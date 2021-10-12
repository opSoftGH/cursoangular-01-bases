import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdicionComponent } from './adicion.component';



@NgModule({
  declarations: [
    AdicionComponent
  ],
  exports:[
    AdicionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContadorModule {

 }
