import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { CargarUsuario } from '../interfaces/cargarUsuarios';
import { LoginFrom } from '../interfaces/login-form.interfaces';
import { RegisterFrom } from '../interfaces/register-form.interface';
import { List } from '../models/listagetlist.module';


import { Usuario } from '../models/usuario.module';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  userToken!: string;
  public usuario:Usuario;
  constructor(private router:Router,
    private http: HttpClient) { }

  get token():string{
    return localStorage.getItem('token') ||'';
    }
  
    get headers(){
      return {headers:  { 'x-token': this.token}}
    }

get id():string{
  return this.usuario.id ||'';
}
validarToken():Observable<boolean>{
  const token=localStorage.getItem('token')||'';
 return this.http.get('http://localhost:9090/api/auth/renew',{headers:{
    'x-token':token
  }
}).pipe(
  tap((resp:any)=>{
  //  console.log('usuario',resp);
   const {codigo_doctor,doctor,estado,id,password,rol, usuario}=resp.user;
    this.usuario=new Usuario(id,doctor,codigo_doctor,usuario,'',rol,estado);
    localStorage.setItem('token',resp.token)
  }),map(resp=>true),
  catchError(error=>of(false))
);
}





login(List: List){
  return this.http.post('http://localhost:9090/api/auth/login',List)
  .pipe(
    tap((resp:any)=>{
   
      localStorage.setItem('token',resp.token)
    })
  )

} 

cargarUsuarios(formData:RegisterFrom){
  return this.http.post(`${environment.url}/usuarios`,formData,this.headers)
}

/* private guardarToken(idToken:string){
this.userToken=idToken;
localStorage.setItem('token',idToken)
} */


logout(){
  localStorage.removeItem('token');
  this.router.navigateByUrl('/login');
}


GetUsuarios(desde: number = 0){
  return this.http.get<CargarUsuario>(`${environment.url}/usuarios?desde=${desde}`,this.headers)

  
}







eliminarUsuario(usuario:Usuario){
  return this.http.delete(`http://localhost:9090/api/usuarios/${usuario.id}`,this.headers)

 }

 cambiarRole(usuario:Usuario){
   return this.http.put(`http://localhost:9090/api/usuarios/${usuario.id}`,usuario,this.headers)
 }

}
