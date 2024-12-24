import { Component } from '@angular/core';
import { PublicationFormComponent } from '../publication-form/publication-form.component';
import { PublicationTableComponent } from './publication-table/publication-table.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-edit-publication',
  standalone: true,
  imports: [
    PublicationFormComponent,
    PublicationTableComponent,
    MatButtonModule

  ],
  templateUrl: './edit-publication.component.html',
  styleUrl: './edit-publication.component.css'
})
export class EditPublicationComponent {

  editarPublicao() {
    //TODO
  }
}
