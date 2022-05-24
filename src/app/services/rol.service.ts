import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { cargarRol } from '../interfaces/cargarRol.interface';
const baseUrl=environment.url;
@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private router: Router,
    private http:HttpClient) { }

    getRol(){
  return this.http.get<cargarRol>(`${baseUrl}/roles`)
  .pipe(
    map(resp=>
      resp.rol.map(
        resp=>({rol:resp.rol, id:resp.id})
      )
    )
  )
    }
    
}

