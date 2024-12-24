import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FileInputComponent } from '../../../components/inputs/file-input/file-input.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-add-publication',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FileInputComponent,
    MatDatepickerModule,
    RouterLink
  ],
  templateUrl: './add-publication.component.html',
  styleUrl: './add-publication.component.css'
})
export class AddPublicationComponent {

  enviarPublicao() {
    //TODO: enviar os dados para o back, fazer atravez de um service
  }

}
