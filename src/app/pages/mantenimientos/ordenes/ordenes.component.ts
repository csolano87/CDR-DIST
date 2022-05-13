import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Listaordene } from 'src/app/interfaces/ordenes.interface';
import { List } from 'src/app/models/listagetlist.module';
import { GetListService } from 'src/app/services/get-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent  {


  listau=[];
  get cedulaNoValido(){
    return this.buscarform?.get('PatientID2')!.invalid && this.buscarform?.get('PatientID2')!.touched
      }
      get SampleNoValido(){
        return this.buscarform?.get('SampleID')!.invalid && this.buscarform?.get('SampleID')!.touched
          }
          get valeNoValido(){
            return this.buscarform?.get('vale')!.invalid && this.buscarform?.get('vale')!.touched
              }
              buscarform!:FormGroup;
              cargando = false;
  public listaordene: Listaordene[]=[];
    constructor(
      private router:Router,
       private fb:FormBuilder,
       private listagetlist:GetListService) {this.crearFormulario();}
    ///  this.cargarFormulario();}
  
  
  
  
  
  crearFormulario(){
  
  this.buscarform= this.fb.group({
  
    SampleID:['',[Validators.minLength(10)]],
    PatientID2:['',[Validators.required,Validators.minLength(10)]],
    todos:['',[Validators.maxLength(5)]],
  
  });
  }
  /* cargarFormulario(){
    this.buscarform.reset({
      SampleID:'',
      PatientID2:'',
    })
  } */
  
    buscar(){
      if ( this.buscarform.pristine ) { return ; }
      this.cargando = true;
      console.log(this.buscarform)
   this.listagetlist.buscarPacientes(this.buscarform.value)
  .subscribe(({listaordenes})=>{
  
  this.listaordene=listaordenes
    
   console.log('listado',listaordenes)
  this.buscarform.reset({
    SampleID:'',
    PatientID2:'',
  }) 
   this.cargando = false;
  }, (err)=>{
    console.log('error',err.error.msg);
    Swal.fire({
      icon:'error',
      title:'No existe Ordenes',
      text:(err.error.msg)
    });
    this.buscarform.reset({
      SampleID:'',
      PatientID2:'',
    }) 
    this.cargando = false;
  }
  
  )
  
    }
  
  
  buscarTodas(lista: List){
  
  console.log(lista)
  this.listagetlist.buscarTodos(lista)
  .subscribe(({listaordenes})=>{
    this.listaordene=listaordenes;
    //this.buscarform.reset();
    this.buscarform.reset({
      SampleID:'',
      PatientID2:'',
    })
  })
  }
  
    
   pdf2(lista: List) {
    console.log(lista.PatientID2)
  
  
       this.listagetlist.pdf2(lista)
              .subscribe((resp:any) => {
  
          const url = resp.pdf;
          const tempLink = document.createElement('a');
          tempLink.href = url;
          tempLink.setAttribute('target', '_blank');
          tempLink.click();
  
        });
    
  }

}
