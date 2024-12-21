import { Injectable } from '@angular/core';
import Event from '../../features/events/edit-event/Event';
@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor() { }


  //Precisa do backend
  public edit(event: Event): void {
    console.log("Evento Editado");
  }
  //Precisa do backend

  public delete(id: number): void {
    console.log("Evento Deletado");
  }

  
}
