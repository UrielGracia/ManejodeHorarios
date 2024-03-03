import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private validatorService: ValidatorService,
    private errorService: ErrorsService,
  ) { }

  public esquemaProduct() {
    return{
      'id_producto': '',
      'name_producto': '',
      'precio': '',
      'departamento': ''
    }
  }

  //Validación de formulario
  public validarProducto(data: any){
    console.log("Validando Producto...",data);
    let error: any = [];

    if(!this.validatorService.required(data["id_producto"])){
      error["id_producto"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["name_producto"])){
      error["name_producto"] = this.errorService.required;
    }else if(!this.validatorService.max(data["name_producto"], 20)){
      error["name_producto"] = this.errorService.max(20);
      alert("La longitud de caracteres para el Nombre del Producto es mayor, deben ser menor a 20");
    }

    if(!this.validatorService.required(data["precio"])){
      error["precio"] = this.errorService.required;
    }else if(!this.validatorService.numeric(data["precio"])){
      error["precio"] = this.errorService.numeric;
      alert("La entrada dada deben ser unicamente números");
    }

    if(!this.validatorService.required(data["departamento"])){
      error["departamento"] = this.errorService.required;
    }else if(!this.validatorService.min(data["departamento"], 5)){
      error["departamento"] = this.errorService.min(5);
      alert("La longitud de caracteres para el Nombre del Departamento es menor, deben ser 5");
    }else if(!this.validatorService.max(data["departamento"], 20)){
      error["departamento"] = this.errorService.max(20);
      alert("La longitud de caracteres para el Nombre del Departamento es mayor, deben ser 20");
    }

    return error;
  }

}