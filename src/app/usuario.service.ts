import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Usuario } from './usuario';
import { USUARIOS } from './mock-usuarios';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private messageService: MessageService) {}

  getUsuarios(): Observable<Usuario[]> {
    const usuarios = of(USUARIOS);
    this.messageService.add('UsuarioService: fetched usuarios');
    return usuarios;
  }

  getUsuario(id: number): Observable<Usuario> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const usuario = USUARIOS.find((h) => h.id === id)!;
    this.messageService.add(`UsuarioService: fetched usuario id=${id}`);
    return of(usuario);
  }
}
