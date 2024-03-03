import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FacadeService } from './facade.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(
    private http: HttpClient,
    private facadeService: FacadeService,
    private validatorService: ValidatorService,
    private errorService: ErrorsService,
  ) { }

  public esquemaMateria() {
    return{
      'nrc': '',
      'name_materia': '',
      'seccion': '',
      'dias': '',
      'hora_inicio': '',
      'hora_final': '',
      'salon': '',
      'prog_educativo': ''
    }
  }

  //Validación de formulario
  public validarMateria(data: any){
    console.log("Validando Materia...",data);
    let error: any = [];

    if(!this.validatorService.required(data["nrc"])){
      error["nrc"] = this.errorService.required;
    }else if(!this.validatorService.numeric(data["nrc"])){
      error["nrc"] = this.errorService.numeric;
      alert("La entrada dada deben ser unicamente números");
    }

    if(!this.validatorService.required(data["name_materia"])){
      error["name_materia"] = this.errorService.required;
    }else if(!this.validatorService.min(data["name_materia"], 4)){
      error["name_materia"] = this.errorService.min(4);
      alert("La longitud de caracteres para el Nombre de la Materia es menor, deben ser 4");
    }else if(!this.validatorService.max(data["name_materia"], 55)){
      error["name_materia"] = this.errorService.max(55);
      alert("La longitud de caracteres para el Nombre de la Materia es mayor, deben ser máximo 55");
    }

    if(!this.validatorService.required(data["seccion"])){
      error["seccion"] = this.errorService.required;
    }else if(!this.validatorService.numeric(data["seccion"])){
      error["seccion"] = this.errorService.numeric;
      alert("La entrada dada deben ser unicamente números");
    }

    if(!this.validatorService.required(data["dias"])){
      error["dias"] = this.errorService.required;
    }else if(!this.validatorService.required(data["dias"])){
      error["dias"] = this.errorService.generic;
      alert("La entrada dada debe tener los días de la materia");
    }

    if(!this.validatorService.required(data["hora_inicio"])){
      error["hora_inicio"] = this.errorService.required;
    }else if(!this.validatorService.time(data["hora_inicio"])){
      error["hora_inicio"] = this.errorService.generic;
      alert("La entrada dada deben ser el formato HH/MM");
    }

    if(!this.validatorService.required(data["hora_final"])){
      error["hora_final"] = this.errorService.required;
    }else if(!this.validatorService.time(data["hora_final"])){
      error["hora_final"] = this.errorService.generic;
      alert("La entrada dada deben ser el formato HH/MM");
    }

    if(!this.validatorService.required(data["salon"])){
      error["salon"] = this.errorService.required;
    }else if(!this.validatorService.min(data["salon"], 8)){
      error["salon"] = this.errorService.min(8);
      alert("La longitud de caracteres para el salon es menor, deben ser 8");
    }else if(!this.validatorService.max(data["salon"], 8)){
      error["salon"] = this.errorService.max(8);
      alert("La longitud de caracteres para el salón es mayor, deben ser máximo 8");
    }

    if(!this.validatorService.required(data["prog_educativo"])){
      error["prog_educativo"] = this.errorService.required;
    }else if(!this.validatorService.required(data["prog_educativo"])){
      error["prog_educativo"] = this.errorService.generic;
      alert("La entrada dada debe ser una de las tres opciones mostradas");
    }
    return error;
  }

  //Funciones extra
  public registrarMateria (data: any): Observable <any>{
    var token = this.facadeService.getSessionToken();    
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+token}); 
    return this.http.post<any>(`${environment.url_api}/materias/`,data, httpOptions);
  }

  //Registro
  public obtenerListaMaterias (): Observable <any>{    
    var token = this.facadeService.getSessionToken();    
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+token});    
    return this.http.get<any>(`${environment.url_api}/lista-materias/`, {headers:headers});  
  }

  public getMateriaByID(idMateria: Number){
    return this.http.get<any>(`${environment.url_api}/materias/?id=${idMateria}`, httpOptions); 
  }

  //Servicio para actualizar usuario
  public editarMateria (data:any): Observable <any>{    
    var token = this.facadeService.getSessionToken();    
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+token});    
    return this.http.put<any>(`${environment.url_api}/materia-edit/`, data, {headers:headers});  
  }

  //Servicio para eliminar usuario
  public eliminarMateria (idMateria:number): Observable <any>{    
    var token = this.facadeService.getSessionToken();    
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+token});    
    return this.http.delete<any>(`${environment.url_api}/materia-edit/?id=${idMateria}`, {headers:headers});  
  }
}
