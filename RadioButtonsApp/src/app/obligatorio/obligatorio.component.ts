import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { RadioItem } from '../interfaces/radio-item.interface';

@Component({
  selector: 'app-obligatorio',
  templateUrl: './obligatorio.component.html',
  styleUrls: ['./obligatorio.component.scss']
})
export class ObligatorioComponent implements OnInit, OnDestroy {

	public obligatorioFormGroup:FormGroup;
	public opcionesControl:FormControl;

	public opcionesUno:Array<RadioItem> = new Array<RadioItem>();

  constructor(private formBuilder:FormBuilder){ 
  	this.obligatorioFormGroup = this.formBuilder.group({
  		"opciones": ['', Validators.compose([Validators.required])]
  	});
  	this.opcionesControl = this.obligatorioFormGroup.controls["opciones"] as FormControl;
  }

  ngOnInit(){
  	this.opcionesUno.push({label:"Uno", seleccionado:false, valor:11});
  	this.opcionesUno.push({label:"Dos", seleccionado:false, valor:22});
  	this.opcionesUno.push({label:"Tres", seleccionado:false, valor:33});
  }

  onSubmit(values:any): void {
  	console.log(values);
  }

  ngOnDestroy() {

  }

}
