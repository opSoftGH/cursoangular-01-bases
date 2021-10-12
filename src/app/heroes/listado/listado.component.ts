import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[] =["IronMan","Dr. Strange","Thor","Spider Man"];
  heroes1:string[] =[];

  borrarHeroe(index:string){
    let indexTemp = parseInt(index);
    indexTemp = indexTemp-1;
    if (indexTemp<this.heroes.length && indexTemp>=0){
      this.heroes1.push(this.heroes[indexTemp]);
      this.heroes.splice(indexTemp, 1);
    }
  }
  reiniciarListas(){
    this.heroes =["IronMan","Dr. Strange","Thor","Spider Man"];
    this.heroes1 =[];
  }
}
