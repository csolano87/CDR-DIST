import { Component, OnInit } from '@angular/core';
import { Rolee } from 'src/app/models/rol.module';
import { Usuario } from 'src/app/models/usuario.module';
import { RolService } from 'src/app/services/rol.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
public totalUsuarios:number=0;
public usuarios:Usuario[]=[];
listaroles:Rolee[]=[];
public desde:number=0;

public cargando:boolean=true;
  constructor(private usuarioservice :UsuarioService,
    private listarol: RolService) { }

  ngOnInit(): void {
    this.listarol.getRol()
    .subscribe(resp=>{
      console.log(resp)
      this.listaroles=resp;
     
      
       })
this.Getusuarios();
  }
Getusuarios(){
  this.cargando=true;
  this.usuarioservice.GetUsuarios(this.desde)
  .subscribe(({total,usuarios})=>{
    this.totalUsuarios=total;
    this.usuarios=usuarios;
    this.cargando=false;
  })
}


cambinarPagina(valor: number){
  this.desde+=valor;
  if (this.desde<0) {
    this.desde=0
  }else if (this.desde>=this.totalUsuarios) {
    this.desde-=valor;
  }
  this.Getusuarios();
  }


  eliminarUsuario(usuario:Usuario){
console.log(usuario.id)
console.log(this.usuarioservice.id)
if (usuario.id != this.usuarioservice.id) {


   
 
    Swal.fire({
      title: 'Borrar usuario?',
      text: `Esta seguro de borrar a ${usuario.doctor}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText:'Si borrarlo?',
    }).then((result)=>{
        if (result.value) {       
          this.usuarioservice.eliminarUsuario(usuario)
          .subscribe(resp=>{ 
            this.Getusuarios();
            Swal.fire('Usuario Borrado',
           `${usuario.doctor} fue eliminado correctamente`,
           'success'
           )
        });
    }

    })
}else{
 Swal.fire('Error','No puedes eliminar estes usuario','error');
}
  }

  cambiarRole(usuario:Usuario){
    console.log(usuario)
    this.usuarioservice.cambiarRole(usuario)
    .subscribe(resp=>
      console.log(resp))

  }
}
