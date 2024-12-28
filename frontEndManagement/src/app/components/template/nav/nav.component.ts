import { Component } from '@angular/core';
import { LinkBoxComponent } from './link-box/link-box.component';
import { RouterModule } from '@angular/router';
import { ShowHideLinksDirective } from './show-hide-links/show-hide-links.directive';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterModule,
    LinkBoxComponent,
    ShowHideLinksDirective    
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
}
