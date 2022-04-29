export class Usuario{


    constructor(
      public id?:number,
      public  nombre?: string,
      public apellido?:string,
      public  usuario?:string,
      public  password?:string,
      public  password2?:string,
      public  rol?:string,
      public  estado?:string,
    ){}
}