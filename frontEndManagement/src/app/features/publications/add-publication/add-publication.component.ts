import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { PublicationService } from '../../../shared/publication/publication.service';
import { PublicationFormComponent } from '../publication-form/publication-form.component';
@Component({
  selector: 'app-add-publication',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
    PublicationFormComponent
  ],
  templateUrl: './add-publication.component.html',
  styleUrl: './add-publication.component.css'
})
export class AddPublicationComponent {

  constructor( private publicationService: PublicationService) { }

  enviarPublicao() {

    this.publicationService.postPublication()
  }

}
