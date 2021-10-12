import{Component} from '@angular/core';

@Component({
  selector:'app-adicion',
  template:`
    <h1>{{titulo}}</h1>
    <input (keyup)="actualizaEtiquetas(base_txt.value)" id="base_txt" #base_txt type="text" value="{{base}}">
    <button (click)="adicion(base_txt.value, 1);"> + {{base}}</button>
    <span>{{numero}}</span>
    <button (click)="adicion(base_txt.value,-1);"> - {{base}}</button>
  `
})
export class AdicionComponent{
  titulo:string= 'App Adicion';
  numero:number = 100;
  base:string="1";

  adicion(valor:string, signo:number){
    let numeroTemp = parseInt(valor);
    numeroTemp = numeroTemp*signo;
    this.numero += numeroTemp;
  }
  actualizaEtiquetas(valor:string){
    this.base=valor;
  }
}
