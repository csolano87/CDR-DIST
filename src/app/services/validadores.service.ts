import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }
 passwordIguales(passwordName:string,password2Name:string){
return(FormGroup:FormGroup)=>{
const passwordControl=FormGroup.controls[passwordName];
const password2Control=FormGroup.controls[password2Name];

if (passwordControl.value ===password2Control.value) {
  password2Control.setErrors(null);
}else{
  password2Control.setErrors({noEsigual:true});
}
}
 }

}
