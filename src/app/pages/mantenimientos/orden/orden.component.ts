import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { Listaordene, ListaOrdenes } from 'src/app/interfaces/ordenes.interface';
import { List } from 'src/app/models/listagetlist.module';

import { GetListService } from 'src/app/services/get-list.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css'
  ]
})
export class OrdenComponent  {
buscarform!:FormGroup;
cargando = false;


 listau=[];
get cedulaNoValido(){
  return this.buscarform?.get('PatientID2')!.invalid && this.buscarform?.get('PatientID2')!.touched
    }
    get SampleNoValido(){
      return this.buscarform?.get('SampleID')!.invalid && this.buscarform?.get('SampleID')!.touched
        }
    
/* 
 get DoctorIDNameNoValido(){
  const DoctorID=this.buscarform.get('DoctorID').value



   if (   DoctorID === "" ) { 


    
  return   this.buscarform.value.DoctorID=localStorage.getItem('doctor')
  
  }  else  {  
      return  this.buscarform.value.DoctorID = ""
  }
  
      }   */
      //return (DemographicName == false  || DemographicName == '') ? this.buscarform.value.DemographicName=localStorage.getItem('doctor'):
public listaordene: Listaordene[]=[];
  constructor(
     private fb:FormBuilder,
     private listagetlist:GetListService) {this.crearFormulario();}





crearFormulario(){

this.buscarform= this.fb.group({

  SampleID:['',[Validators.minLength(10)]],
  PatientID2:['',[Validators.minLength(10)]],


});
}


  buscar(){
    this.cargando = true;
    console.log(this.buscarform)
 this.listagetlist.buscarPacientes(this.buscarform.value)
.subscribe(({listaordenes})=>{

this.listaordene=listaordenes
  
 console.log('listado',listaordenes)





this.cargando = false;
})
  }


buscarTodas(lista: List){

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
