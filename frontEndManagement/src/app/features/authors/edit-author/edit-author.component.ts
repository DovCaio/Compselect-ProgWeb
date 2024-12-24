import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthorsInputComponent } from '../authors-input/authors-input.component';
import { AuthorService } from '../../../shared/author/author.service';
import { AuthorsTableComponent } from '../authors-table/authors-table.component';

@Component({
  selector: 'app-edit-author',
  standalone: true,
  imports: [
    AuthorsInputComponent,
    MatButtonModule,
    AuthorsTableComponent

  ],
  templateUrl: './edit-author.component.html',
  styleUrl: './edit-author.component.css'
})
export class EditAuthorComponent {
  constructor(private authorService: AuthorService) { }


  update () {
    this.authorService.updateAuthor();
  }
}
