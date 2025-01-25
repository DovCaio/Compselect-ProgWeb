import { Injectable } from '@angular/core';
import Event from '../../features/events/edit-event/Event';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { EventDTO } from '../../features/events/EventDTO';
import { URL } from '../../config/urlBackend';
import { transformClassIntoFormData } from '../../util/';
import { firstValueFrom, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public async post(event: FormData): Promise<Observable<any>>{
    
    return this.http.post(URL + "/events", event);

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
