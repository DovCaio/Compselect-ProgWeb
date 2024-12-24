import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FileInputComponent } from '../../../components/inputs/file-input/file-input.component';


@Component({
  selector: 'authors-input',
  standalone: true,
  imports: [
    MatInputModule,
    FileInputComponent

  ],
  templateUrl: './authors-input.component.html',
  styleUrl: './authors-input.component.css'
})
export class AuthorsInputComponent {

}
