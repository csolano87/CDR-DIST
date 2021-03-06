import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ListaOrdenes } from '../interfaces/ordenes.interface';
import { Lista } from '../models/doctor.module';
import { List } from '../models/listagetlist.module';

//import { ListaOrdenes } from '../interfaces/ordenes.interface';

const baseUrl=environment.url;
@Injectable({
  providedIn: 'root'
})
export class GetListService {
  userToken!: string;
  constructor(private http:HttpClient) { }

/* 
  buscarPaciente(PatientID2 : string){


    return this.http.get<ListaOrdenes>(`http://localhost:9090/api/buscarordenes,${PatientID2}`)
    .pipe(
      delay(1500)
    )
  } */
 
  get token():string{
    return localStorage.getItem('token') ||'';
    }
  
    get headers(){
      return {headers:  { 'x-token': this.token}}
    }

  buscarPacientes(forma:ListaOrdenes){


    return this.http.post<ListaOrdenes>(`${baseUrl}/buscarordenes`,forma,this.headers)
    .pipe(
      delay(1500)
    )
  }
  buscarTodos(lista : List){


    return this.http.get<ListaOrdenes>(`${baseUrl}/buscarordenes/${lista}`,this.headers)
    .pipe(
      delay(1500)
    )
  }

  pdf2(lista: List){
    console.log('estoy en el servicio.',lista)
    return this.http.get<ListaOrdenes>(`${baseUrl}/buscar/${lista.SampleID}`)
  // return this.http.get<pdfPacientes>(`${environment.url}/buscar/${lista.SampleID}`)
   /* .pipe(
     delay(0)
   ); */
} 
}
