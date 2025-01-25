import { Component, Output, EventEmitter, Input } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { FormsModule} from '@angular/forms';
import {  MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FileInputComponent } from '../../../components/inputs/file-input/file-input.component';
import { RouterModule } from '@angular/router';
import { EventService } from '../../../shared/event/event.service';
import { EventDTO } from '../EventDTO';
import { transformClassIntoFormData } from '../../../util';
@Component({
  selector: 'event-values-input',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    MatButtonModule,
    FileInputComponent,
    RouterModule
  ],
  templateUrl: './event-values-input.component.html',
  styleUrl: './event-values-input.component.css'
})
export class EventValuesInputComponent {

  eventValuesHandler: EventDTO = {
    title: '',
    dateEvent: "",
    time: '',
    description: '',
    target: "",
    activities: "",
    image: new File([], ''),
    location: {
      country: '',
      city: '',
      street: '',
      number: 0
    },
  };


  fileInputValue: File | null = null;

  method: string = 'post';

  @Input()
  set _method(values: string) {
    this.method = values;
  }

  constructor(private eventService: EventService) {}


  recieveImage(file: File| null): void {
    this.fileInputValue = file;
  }



  async getValues() {
    if(this.eventValuesHandler.target && typeof this.eventValuesHandler.target === 'string') this.eventValuesHandler.target = (this.eventValuesHandler.target as string).split(', '); //ESSA FORMA DE TRATAR TARGET E ACTIVIT ESTÁ MUITO PORCA, MUDAR;
    if(this.eventValuesHandler.activities && typeof this.eventValuesHandler.activities === 'string') this.eventValuesHandler.activities = (this.eventValuesHandler.activities as string).split(', ');

    if(this.eventValuesHandler.dateEvent) this.eventValuesHandler.dateEvent = new Date(this.eventValuesHandler.dateEvent).toISOString();

    if(this.fileInputValue) this.eventValuesHandler.image = this.fileInputValue;
    this.sendValues()
  }

  sendValues() {
    this.eventService.post(transformClassIntoFormData(this.eventValuesHandler));
  }

}
