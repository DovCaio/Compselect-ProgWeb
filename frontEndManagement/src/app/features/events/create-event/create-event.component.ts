import { Component,ChangeDetectionStrategy } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEventComponent {

}
