import { Component } from '@angular/core';

import { EventsTableComponent } from './events-table/events-table.component';
import { EventEditionComponent } from './event-edition/event-edition.component';


@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [

    EventsTableComponent,
    EventEditionComponent

  ],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent {



}
