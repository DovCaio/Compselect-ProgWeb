import { Component } from '@angular/core';
import { FileInputComponent } from '../../../components/inputs/file-input/file-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PostElement {
  value: string;
  viewValue: string;
}

interface Post {
  id: number;
  element: string;
  content: string;
}

@Component({
  selector: 'app-create-new-post',
  standalone: true,
  imports: [
    FileInputComponent,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './create-new-post.component.html',
  styleUrl: './create-new-post.component.css'
})
export class CreateNewPostComponent {

  postElements: PostElement[] = [
    {value: 'image', viewValue: 'Imagen'},
    {value: 'tittle', viewValue: 'Titulo'},
    {value: 'text', viewValue: 'Texto'},
    {value: 'link', viewValue: 'Link'}
  ];

  elements: Post[] | any = [
  ]

  choiced = "";

  insertElement(form: any): void {
    //TODO: resolver o problema de inserção da imagem, aparentemente o angular não gerencia esse tipo de input, por isso talvez seja necessário fazer alguma captura com o (change) no input do tipo file

    const post: Post = {
      id: this.elements.length + 1,
      element: this.choiced,
      content: this.choiced !== 'image' ? form.value[this.choiced] :  URL.createObjectURL(form.value[this.choiced])
    }
    this.elements.push(post)
  }

  removeElement(id: number): void {
    this.elements = this.elements.filter((element : Post) => element.id !== id);
  }

}
