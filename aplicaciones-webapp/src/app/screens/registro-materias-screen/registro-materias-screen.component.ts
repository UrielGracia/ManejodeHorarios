import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriasService } from 'src/app/services/materias.service';
import { ActualizarMateriaModalComponent } from 'src/app/modals/actualizar-materia-modal/actualizar-materia-modal.component';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

declare var $: any;

interface Programa {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registro-materias-screen',
  templateUrl: './registro-materias-screen.component.html',
  styleUrls: ['./registro-materias-screen.component.scss']
})

export class RegistroMateriasScreenComponent implements OnInit{
  //Prueba
  programas: Programa[] = [
    {value: 'ICC', viewValue: 'Ingeniería en Ciencias de la Computación'},
    {value: 'LCC', viewValue: 'Licenciatura en Ciencias de la Computación'},
    {value: 'ITI', viewValue: 'Ingeniería en Tecnologías de la Información'},
  ];
  
  //Variables del componente registro
  public editar: boolean = false;
  public materia:any = {};
  //Para detectar errores
  public errors:any = {}
  //mytime: Date = new Date();
  public idMateria: Number = 0;

  constructor(
    private materiasService: MateriasService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    public dialog: MatDialog,
  ) {}
  
  ngOnInit(): void {
    this.materia = this.materiasService.esquemaMateria();
    //Imprimir datos en consola
    console.log("Materia: ", this.materia);
    //El primer if valida si existe un parámetro en la URL    
    if(this.activatedRoute.snapshot.params['id'] != undefined){      
      this.editar = true;      
      //Asignamos a nuestra variable global el valor del ID que viene por la URL      
      this.idMateria = this.activatedRoute.snapshot.params['id'];      
      console.log("ID Materia: ", this.idMateria);      
      //Al iniciar la vista obtiene el usuario por su ID      
      this.obtenerMateriaByID();    
    }
    //Imprimir datos en consola
    console.log("Materia: ", this.materia);
  }

  public obtenerMateriaByID(){
    this.materiasService.getMateriaByID(this.idMateria).subscribe(
      (response)=>{
        this.materia = response;
        this.materia.nrc = response.materia.nrc;
        this.materia.name_materia = response.materia.name_materia;
        this.materia.seccion = response.materia.seccion;
        this.materia.prog_educativo = response.materia.prog_educativo;
        console.log("Datos materia: ",this.materia);
      }, (error)=>{
        alert("No se pudieron obtener los datos de la materia para editar");
      }
    );
  }

  public regresar() {
    this.location.back();
  }

  public registrar() {
    console.log("Datos de la materia: ", this.materia);
    //Validar
    this.errors = []

    this.errors = this.materiasService.validarMateria(this.materia);
    if(!$.isEmptyObject(this.errors)){
      return false;
    }

    this.materiasService.registrarMateria(this.materia).subscribe(
      (response)=>{
        alert("Materia registrada correctamente");
        console.log("Materia registrada: ",response);
        this.router.navigate(["home"]);
      }, (error)=>{
        alert("No se pudo registrar la materia");
      }
    )
  }

  /*public actualizar(){
    //Validacion
    //Validar
    this.errors = [];

    this.errors = this.usuariosService.validarUsuario(this.user, this.editar);
    if(!$.isEmptyObject(this.errors)){
      return false;
    }
    console.log("Paso la validación");
    
    this.usuariosService.editarUsuario(this.user).subscribe(
      (response)=>{
        alert("Usuario editado correctamente");
        this.router.navigate(["home"]);
      }, (error)=>{
        alert("No se pudo editar");
      }
    );
  }*/

  public actualizar(){
    //Validacion
    //Validar
    this.errors = [];

    this.errors = this.materiasService.validarMateria(this.materia);
    if(!$.isEmptyObject(this.errors)){
      return false;
    }
    console.log("Paso la validación");
    
    const dialogRef = this.dialog.open(ActualizarMateriaModalComponent,{
      data: this.materia, //Se pasan valores a traves del componente
      height: '268px',
      width: '328px',
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if(result.isUpdate){
        console.log("Materia actualizada");
        //Recargar página
        this.router.navigate(["homeM"]);
      }else{
        console.log("No se actualizó la materia");
        //alert("No se eliminó la materia");
      }
    });
  }

}
