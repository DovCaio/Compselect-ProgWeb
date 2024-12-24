import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FileInputComponent } from '../../../components/inputs/file-input/file-input.component';
@Component({
  selector: 'publication-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FileInputComponent
  ],
  templateUrl: './publication-form.component.html',
  styleUrl: './publication-form.component.css'
})
export class PublicationFormComponent {

  enviarPublicao() {
    //TODO
  }
}
