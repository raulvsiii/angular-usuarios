import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css'],
})
export class UsuarioDetailComponent implements OnInit {
  usuario: Usuario | undefined;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioService
      .getUsuario(id)
      .subscribe((usuario) => (this.usuario = usuario));
  }

  goBack(): void {
    this.location.back();
  }
}
