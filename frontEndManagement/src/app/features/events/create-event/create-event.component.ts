import { Component,ChangeDetectionStrategy} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
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
    MatNativeDateModule,
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

  

}
