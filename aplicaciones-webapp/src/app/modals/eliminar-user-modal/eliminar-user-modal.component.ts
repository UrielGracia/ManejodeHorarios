import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-eliminar-user-modal',
  templateUrl: './eliminar-user-modal.component.html',
  styleUrls: ['./eliminar-user-modal.component.scss']
})
export class EliminarUserModalComponent implements OnInit{

  constructor(
    public usuariosService: UsuariosService,
    private dialogRef: MatDialogRef<EliminarUserModalComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ){}
  
  ngOnInit(): void {

  }

  public cerrar_modal(){
    this.dialogRef.close({isDelete:false});
  }

  public eliminarUser(){
    this.usuariosService.eliminarUsuario(this.data.id).subscribe(
      (response)=>{
        console.log(response);
        this.dialogRef.close({isDelete:true});
      }, (error)=>{
        alert("Usuario no eliminado");
        this.dialogRef.close({isDelete:false});
      }
    );
  }
}
