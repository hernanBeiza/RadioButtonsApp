import { Component, OnInit } from '@angular/core';

interface RadioItem {
  label:string;
  seleccionado:boolean;
  valor:number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  public opcionesUno:Array<RadioItem> = new Array<RadioItem>();
  public opcionesDos:Array<RadioItem> = new Array<RadioItem>();

  public desactivarGrupo:boolean = false;

  ngOnInit(){
  	this.opcionesUno.push({label:"Uno", seleccionado:false, valor:1});
  	this.opcionesUno.push({label:"Dos. Yo borraré el grupo 2", seleccionado:false, valor:2});
  	this.opcionesUno.push({label:"Tres. Yo desactivaré el grupo 2", seleccionado:false, valor:3});

  	this.opcionesDos.push({label:"Primero", seleccionado:true, valor:4});
  	this.opcionesDos.push({label:"Segundo", seleccionado:false, valor:5});
  	this.opcionesDos.push({label:"Tercero", seleccionado:false, valor:6});
  }

  public opcionesUnoOnClick(event:any, opcion:RadioItem):void {
  	console.log("opcionesUnoOnClick",opcion);
    //Deseleccionar todas las otras
    this.opcionesUno.forEach(uno=>uno.seleccionado=false);
  	opcion.seleccionado = true;
  	//Acá ver el parámetro que borra todo de las opcionesDos
    if(opcion.valor==2){
      //Borrar todo las opciones 2
      this.opcionesDos.forEach(opcion=>opcion.seleccionado=false);
    }
    if(opcion.valor==3){
      //Borrar todo las opciones 2
      this.opcionesDos.forEach(opcion=>opcion.seleccionado=false);
      this.desactivarGrupo = true;
    }
  }

  public opcionesDosOnClick(event:any, opcion:RadioItem):void {
  	console.log("opcionesDosOnClick",opcion);
    //Deseleccionar todas las otras
    this.opcionesDos.forEach(dos=>dos.seleccionado=false);
  	opcion.seleccionado = true;
  }

  public revisarValores():void {
  	console.log(this.opcionesUno);
  	console.log(this.opcionesDos);
  }

  public borrarTodo():void {
    this.desactivarGrupo = false;
    this.opcionesDos.forEach(opcion=>opcion.seleccionado=false);
    this.opcionesUno.forEach(opcion2=>opcion2.seleccionado=false);
  }

}