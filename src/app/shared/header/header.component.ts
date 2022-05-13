import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.module';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css' 
  ]
})
export class HeaderComponent implements OnInit {
public usuario: Usuario;
  constructor(private usuarioservice:UsuarioService) { 
    this.usuario=usuarioservice.usuario
  }

  ngOnInit(): void {
  }

  logout()
{
 this.usuarioservice.logout();
}}
