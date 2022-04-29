import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import {map} from 'rxjs/operators'
import { cargaGetlistdoctor } from '../interfaces/carga-getllistdoctor.interface';
import { Lista } from '../models/doctor.module';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  getDoctor(){
return this.http.get<cargaGetlistdoctor>('http://localhost:9090/api/doctor')
.pipe(
  
  map(resp=>
      resp.lista.map(resp=>( {Description:resp.Description,ValueCode:resp.ValueCode})
)  
  )
);
}

}