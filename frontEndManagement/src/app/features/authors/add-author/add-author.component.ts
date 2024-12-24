import { Component } from '@angular/core';
import  {MatButtonModule} from '@angular/material/button';
import  {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FileInputComponent } from '../../../components/inputs/file-input/file-input.component';
import { AuthorService } from '../../../shared/author/author.service';
import { AuthorsInputComponent } from '../authors-input/authors-input.component';

@Component({
  selector: 'app-add-author',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FileInputComponent,
    AuthorsInputComponent
  ],
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.css'
})
export class AddAuthorComponent {


  constructor( private authorService: AuthorService) {}

  enviar(){
    this.authorService.sendAuthor();
  }

}
