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
    date: "",
    time: '',
    description: '',
    target: "",
    activities: "",
    image: '',
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

  processFile(file : File) :Promise<string>{
    return new Promise((resolve, reject) => {
      //MUDAR PARA UMA ABORDAGEM EM QUE SE USA O minio, para armazenar as imagens, enquanto o back
      //VAi ARMAZENAR OS LINKS DAS IMAGENS, O MINIO ARMAZENA AS IMAGENS.
    })
  }

  async getValues() {
    if(this.formData.target) this.formData.target = (this.formData.target as string).split(', ');
    if(this.formData.activities) this.formData.activities = (this.formData.activities as string).split(', ');
    
    if(this.formData.date) this.formData.date = new Date(this.formData.date).toISOString();

    if(this.fileInputValue) this.formData.image = await this.processFile(this.fileInputValue);

    this.sendValues()
  }

  sendValues() {
    console.log(this.formData);
    this.eventService.post(this.formData);
  }

}
