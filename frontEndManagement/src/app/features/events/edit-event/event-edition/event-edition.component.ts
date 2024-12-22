import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { EventValuesInputComponent } from '../../event-values-input/event-values-input.component';
@Component({
  selector: 'event-edition',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    EventValuesInputComponent
  ],
  templateUrl: './event-edition.component.html',
  styleUrl: './event-edition.component.css'
})
export class EventEditionComponent {

}
