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

  formData: EventDTO = {
    title: '',
    dateEvent: "",
    time: '',
    description: '',
    target: "",
    activities: "",
    image: new File([], ''),
    location: {
      coutry: '',
      city: '',
      address: '',
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
    if(this.formData.target && typeof this.formData.target === 'string') this.formData.target = (this.formData.target as string).split(', '); //ESSA FORMA DE TRATAR TARGET E ACTIVIT ESTÁ MUITO PORCA, MUDAR;
    if(this.formData.activities && typeof this.formData.activities === 'string') this.formData.activities = (this.formData.activities as string).split(', ');

    if(this.formData.dateEvent) this.formData.dateEvent = new Date(this.formData.dateEvent).toISOString();

    if(this.fileInputValue) this.formData.image = this.fileInputValue;
    console.log(transformClassIntoFormData(this.formData));
    //this.sendValues()
  }

  sendValues() {
    this.eventService.post(this.formData);
  }

}
