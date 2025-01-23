import { Injectable } from '@angular/core';
import Event from '../../features/events/edit-event/Event';
import { HttpClient } from '@angular/common/http';
import { EventDTO } from '../../features/events/EventDTO';
import { URL } from '../../config/urlBackend';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public post(event: EventDTO): void {

    const formData = new FormData();
    formData.append('title', event.title);
    formData.append('dateEvent', event.dateEvent);
    formData.append('time', event.time);
    formData.append('description', event.description);
    (event.target as string[]).forEach((target, index) => {
      formData.append(`target[${index}]`, target)
    });
    
    (event.activities as string[]).forEach((activity, index) => {
      formData.append(`activities[${index}]`, activity);
    });

    formData.append('image', event.image);
    formData.append('location[country]', event.location.coutry);
    formData.append('location[city]', event.location.city);
    formData.append('location[street]', event.location.address);
    formData.append('location[number]', event.location.number.toString());

    console.log(formData.get('image'));

    this.http.post(URL + "/events", formData).subscribe();

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
