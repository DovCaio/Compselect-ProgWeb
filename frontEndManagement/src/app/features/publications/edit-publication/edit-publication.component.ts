import { Component } from '@angular/core';
import { PublicationFormComponent } from '../publication-form/publication-form.component';
@Component({
  selector: 'app-edit-publication',
  standalone: true,
  imports: [
    PublicationFormComponent

  ],
  templateUrl: './edit-publication.component.html',
  styleUrl: './edit-publication.component.css'
})
export class EditPublicationComponent {

}
