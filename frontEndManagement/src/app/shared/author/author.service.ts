import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  sendAuthor() {
    //TODO: enviar os dados para o back
    console.log('Enviar')
  }

  updateAuthor() {
    //TODO: enviar os dados para o back
    console.log('Atualizar')
  }
}
