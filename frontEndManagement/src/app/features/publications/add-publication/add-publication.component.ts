import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FileInputComponent } from '../../../components/inputs/file-input/file-input.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterLink } from '@angular/router';
import { PublicationService } from '../../../shared/publication/publication.service';
import { PublicationFormComponent } from '../publication-form/publication-form.component';
@Component({
  selector: 'app-add-publication',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FileInputComponent,
    MatDatepickerModule,
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
