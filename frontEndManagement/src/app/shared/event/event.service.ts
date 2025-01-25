import { Injectable } from '@angular/core';
import Event from '../../features/events/edit-event/Event';
import { HttpClient } from '@angular/common/http';
import { EventDTO } from '../../features/events/EventDTO';
import { URL } from '../../config/urlBackend';
import { transformClassIntoFormData } from '../../util/';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public post(event: FormData): void {

    this.http.post(URL + "/events", event).subscribe();

  }

  


  //Precisa do backend
  public edit(event: Event): void {
    console.log("Evento Editado");
  }
  //Precisa do backend

  public delete(id: number): void {
    console.log("Evento Deletado");
  }

  
}
