import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lista } from 'src/app/models/doctor.module';
import { DoctorService } from 'src/app/services/doctor.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ValidadoresService } from 'src/app/services/validadores.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'
  ]
})
export class RegisterComponent {






  get usuarioNoValido(){
return this.registerform?.get('usuario')!.invalid && this.registerform?.get('usuario')!.touched
  }
  get passwordNoValido(){
    return this.registerform?.get('password')!.invalid && this.registerform?.get('password')!.touched
      }
      get password2NoValido(){
        const password=this.registerform.get('password').value
               const password2=this.registerform.get('password2').value

               return (password === password2)? false:true;
      //  return this.registerform?.get('password')!.invalid && this.registerform?.get('password')!.touched
          }
      get nombreNoValido(){
        return this.registerform?.get('nombre')!.invalid && this.registerform?.get('nombre')!.touched
          }
          get rolNoValido(){
           
            return this.registerform?.get('rol')!.invalid && this.registerform?.get('rol')!.touched
              }

registerform!:FormGroup;


listadoctor:Lista[]=[]
  constructor(private doctorservice:DoctorService,
    private fb:FormBuilder,
     private usuarioservices:UsuarioService,private validadores: ValidadoresService) {this.crearFormulario(); }

  ngOnInit(): void {

    this.doctorservice.getDoctor()
    .subscribe(resp=>{
      
this.listadoctor=resp;
this.listadoctor.unshift({
Description: '[Seleccione Usuario]',
ValueCode: ''
})
console.log(this.listadoctor)
    })
  } 


  crearFormulario(){
   
    this.registerform=this.fb.group({
      nombre:['',[Validators.required]],
      usuario:['',[Validators.required]],
      password:['',[Validators.required]],
      password2:['',[Validators.required]],
      rol:['',[Validators.required]],
     
      DemographicName:['',[Validators.minLength(10)]],
    },{
      validators:this.validadores.passwordIguales('password','password2')
    });
  }
  crearUsuario(){

if (this.registerform.invalid) {
  return Object.values(this.registerform.controls)
  .forEach(control=>{control.markAllAsTouched()});
}
Swal.fire({
  allowOutsideClick:false,
  icon:'info',
  text:'Espere por favor ...'
});
Swal.showLoading();
this.usuarioservices.cargarUsuarios(this.registerform.value)
.subscribe(resp=>{
  Swal.close();
this.registerform.reset();
},(err)=>{
  console.log('error',err.error.msg);
  Swal.fire({
    icon:'error',
    title:'Error al autenticar',
    text:(err.error.msg)
  });
});
  }



 
}
