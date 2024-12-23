import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import  { RouterLink } from '@angular/router';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {

}
