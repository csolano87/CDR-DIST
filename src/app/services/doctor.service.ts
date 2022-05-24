import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment.prod';
import { cargaGetlistdoctor } from '../interfaces/carga-getllistdoctor.interface';
import { Lista } from '../models/doctor.module';


const baseUrl=environment.url;
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  getDoctor(){
return this.http.get<cargaGetlistdoctor>(`${baseUrl}/doctor`)
 .pipe(
  
  map(resp=>
      resp.lista.map(resp=>( 
        {  
          //msdataRowOrder:resp.msdataRowOrder,
          ID:resp.ID,
          //DemographicCode:resp.DemographicCode,
         // DemographicName:resp.DemographicName,
          Description:resp.Description,
          ValueCode:resp.ValueCode,
          Status:resp.Status})
)  
  )
); 
}

}