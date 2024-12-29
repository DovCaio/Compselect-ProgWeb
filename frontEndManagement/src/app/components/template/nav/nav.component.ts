import { Component } from '@angular/core';
import { LinkBoxComponent } from './link-box/link-box.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterModule,
    LinkBoxComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
}
