import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginFrom } from '../interfaces/login-form.interfaces';
import { RegisterFrom } from '../interfaces/register-form.interface';
import { List } from '../models/listagetlist.module';


import { Usuario } from '../models/usuario.module';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  userToken!: string;
  constructor(private http: HttpClient) { }

  get token():string{
    return localStorage.getItem('token') ||'';
    }
  
    get headers(){
      return {headers:  { 'x-token': this.token}}
    }



login(List: List){
  return this.http.post('http://localhost:9090/api/auth/login',List)
  .pipe(
    map((resp:any)=>{
      this.guardarToken(resp.token)
    })
  )

} 

cargarUsuarios(formData:RegisterFrom){
  return this.http.post(`${environment.url}/usuarios`,formData,this.headers)
}

private guardarToken(idToken:string){
this.userToken=idToken;
localStorage.setItem('token',idToken)
}


logout(){
  localStorage.removeItem('token');
}
}
