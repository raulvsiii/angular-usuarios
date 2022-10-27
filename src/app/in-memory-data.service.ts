import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const usuarios = [
      { id: 12, name: 'Gansito', quantity: 42 },
      { id: 13, name: 'Coca Cola', quantity: 67 },
      { id: 14, name: 'Pepsi', quantity: 158 },
      { id: 15, name: 'Doritos', quantity: 68 },
      { id: 16, name: 'Pringles', quantity: 50 },
      { id: 17, name: 'Dos Equis', quantity: 68 },
      { id: 18, name: 'Victoria', quantity: 1024 },
      { id: 19, name: 'Cacahuates', quantity: 674 },
      { id: 20, name: 'Palomitas', quantity: 281 },
    ];
    return { usuarios };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(usuarios: Usuario[]): number {
    return usuarios.length > 0
      ? Math.max(...usuarios.map((usuario) => usuario.id)) + 1
      : 11;
  }
}
