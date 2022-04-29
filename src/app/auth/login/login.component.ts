import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/services/usuario.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
]
})
export class LoginComponent  {


 
  get usuarioNoValido(){

    return this.loginforma?.get('usuario')!.invalid && this.loginforma?.get('usuario')!.touched
  } 
  get passwordNoValido(){

    return this.loginforma?.get('usuario')!.invalid && this.loginforma?.get('password')!.touched
  } 


  
  
 loginforma!: FormGroup;

 constructor(private router : Router, 
                private fb:FormBuilder,
                private usuarioServices:UsuarioService) {
   this.crearFormulario(); }
 
get PatientID1NoValido(){

   return this.loginforma?.get('usuario')!.invalid && this.loginforma?.get('usuario')!.touched
 } 
 get SampleIDNoValido(){

   return this.loginforma?.get('password')!.invalid && this.loginforma?.get('password')!.touched
 } 

  
  crearFormulario() {

 
    this.loginforma= this.fb.group({
      
      usuario:['',[Validators.required]],
      //password:['',[Validators.required,Validators.minLength(10)]], 
      password:['',[Validators.required]], 
    }); 
    }
      login(){
   
    if (this.loginforma.invalid) {
      return Object.values(this.loginforma.controls)
      .forEach(control=>{control.markAllAsTouched()});
    }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
  this.usuarioServices.login(this.loginforma.value)
 
  .subscribe(resp=>{
    Swal.close();
    localStorage.setItem('doctor',this.loginforma.value.usuario);
    this.router.navigateByUrl('/ordenes')
  }, (err)=>{
    console.log('error',err.error.msg);
    Swal.fire({
      icon:'error',
      title:'Error al autenticar',
      text:(err.error.msg)
    });
  } );
    } 
   
}
