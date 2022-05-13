import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { cargarRol } from '../interfaces/cargarRol.interface';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private router: Router,
    private http:HttpClient) { }

    getRol(){
  return this.http.get<cargarRol>('http://localhost:9090/api/roles')
  .pipe(
    map(resp=>
      resp.rol.map(
        resp=>({rol:resp.rol, id:resp.id})
      )
    )
  )
    }
    
}

