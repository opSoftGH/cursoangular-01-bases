import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
  nombre:string = "ironman";
  edad:number = 45;
  band=true;

  get nombreCapitalizado(){
    return this.nombre.toLocaleUpperCase();
  }

  cambiarHeroe():void{
    if(this.band){
      this.nombre = 'spiderman';
      this.edad = 20;
      this.band=false;
    }else{
      this.nombre = "ironman";
      this.edad = 45;
      this.band=true;
    }
  }

  obtenerNombre(band:boolean):string{
    //Hay dos formas de concadenar strings
    if(band){
      return this.nombre+" - "+this.edad;
    }else{
      return `${this.nombre} - ${this.edad}`;
    }
  }
}
