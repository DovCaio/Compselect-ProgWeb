import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button"
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

}
