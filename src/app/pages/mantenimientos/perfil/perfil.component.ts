import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { Rolee } from 'src/app/models/rol.module';
import { Usuario } from 'src/app/models/usuario.module';
import { RolService } from 'src/app/services/rol.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {
  listaroles:Rolee[]=[]; 
 usuarioseleccionado:Usuario;

  perfilform!:FormGroup;


  constructor(private router: Router,
    private listarol: RolService,
    private fb:FormBuilder,
    private activatedRoute: ActivatedRoute,
    private usuarioservices:UsuarioService) { 
      this.cargarDataAlFormulario();
    }

 
    ngOnInit(): void {

      
      this.perfilform=this.fb.group({
        doctor:['',[Validators.required]],     
        usuario:['',[Validators.required]],       
        rol:['',[Validators.required]],
       
      
      });

      this.activatedRoute.params
      .subscribe(({id})=> this.cargarUsuario(id));
    
      this.listarol.getRol()
      .subscribe(resp=>{
        console.log(resp)
        this.listaroles=resp;
       
        
         });


         
        }

        cargarDataAlFormulario(){

        } 

        cargarUsuario(id:string){


          this.usuarioservices.GetUsuarioById(id)
          .pipe(
            delay(100)
          )
          .subscribe ({ next:(user) =>{      
        

            const {id,doctor,usuario,rol,}=user
            this.usuarioseleccionado=user;
            this.perfilform.setValue({ doctor,usuario, rol });
       
          
          }, error:() => {
            return  this.router.navigateByUrl(`/dashboard/usuarios`) ;
          }
        })
          }
          updateUsuario(){
          
          
             const {usuario} = this.perfilform.value;
            const data ={ ...this.perfilform.value,
            id : this.usuarioseleccionado.id
          
          }
           console.log(data)
             this.usuarioservices.actualizarPerfil(data)
            .subscribe(resp=>{
              Swal.fire('Actualizado', `${ usuario } actualizado correctamente`, 'success');
              console.log(resp) 
            }) 
          }       

}
