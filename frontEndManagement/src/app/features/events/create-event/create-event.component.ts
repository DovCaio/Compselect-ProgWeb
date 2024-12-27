import { Component,ChangeDetectionStrategy} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import { EventValuesInputComponent } from '../event-values-input/event-values-input.component';
@Component({
  selector: 'app-create-event',
  standalone: true,
  animations: [
  ],
  providers: [
  ],
  imports: [

    FormsModule,
    MatButtonModule,
    RouterLink,
    MatDividerModule,
    EventValuesInputComponent
  ],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEventComponent {

  fileInputValue: File | null = null;

  addEvent(){
    console.log(this.fileInputValue);
  }

  receiveFile(file: File| null): void {
    this.fileInputValue = file;
  }

}
