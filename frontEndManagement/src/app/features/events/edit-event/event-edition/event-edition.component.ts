import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { EventValuesInputComponent } from '../../event-values-input/event-values-input.component';
import  {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'event-edition',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    EventValuesInputComponent,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './event-edition.component.html',
  styleUrl: './event-edition.component.css'
})
export class EventEditionComponent {

  editEvent():void {
    //TODO
    //Deve enviar a requisição que alter os dados, casos os dados sejam modificados.
  }

}
