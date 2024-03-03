import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MateriasService } from 'src/app/services/materias.service';


@Component({
  selector: 'app-actualizar-materia-modal',
  templateUrl: './actualizar-materia-modal.component.html',
  styleUrls: ['./actualizar-materia-modal.component.scss']
})
export class ActualizarMateriaModalComponent implements OnInit{
  constructor(
    public materiasService: MateriasService,
    private dialogRef: MatDialogRef<ActualizarMateriaModalComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void {

  }

  public cerrar_modal(){
    this.dialogRef.close({isUpdate:false});
  }

  public actualizarMateria(){
    this.materiasService.editarMateria(this.data).subscribe(
      (response)=>{
        console.log(response);
        this.dialogRef.close({isUpdate:true});
      }, (error)=>{
        alert("Materia no actualizada");
        this.dialogRef.close({isUpdate:false});
      }
    );
  }
}