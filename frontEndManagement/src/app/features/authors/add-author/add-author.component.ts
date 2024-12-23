import { Component } from '@angular/core';
import  {MatButtonModule} from '@angular/material/button';
import  {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FileInputComponent } from '../../../components/inputs/file-input/file-input.component';

@Component({
  selector: 'app-add-author',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FileInputComponent
  ],
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.css'
})
export class AddAuthorComponent {

  enviar(){
    //TODO: enviar os dados para o back, fazer atravez de um service
    console.log('Enviar')
  }

}
