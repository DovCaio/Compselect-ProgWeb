import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {    MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FileInputComponent } from '../../../components/inputs/file-input/file-input.component';
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
    FileInputComponent
  ],
  templateUrl: './event-values-input.component.html',
  styleUrl: './event-values-input.component.css'
})
export class EventValuesInputComponent {

  
}
