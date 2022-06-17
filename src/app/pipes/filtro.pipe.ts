import { Pipe, PipeTransform } from '@angular/core';
import { Listaordene } from '../interfaces/ordenes.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(listaOrdenes: Listaordene[], page: number= 0): Listaordene[] {

   
    return listaOrdenes.slice(page, page + 5);
  }

}
