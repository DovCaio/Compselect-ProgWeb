import { Component } from '@angular/core';
import { FileInputComponent } from '../../../components/inputs/file-input/file-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Post from "../Post";
import { BlogService } from  '../../../shared/blog/blog.service';

interface PostElement {
  value: string;
  viewValue: string;
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
    FormsModule,
  ],
  templateUrl: './create-new-post.component.html',
  styleUrl: './create-new-post.component.css'
})
export class CreateNewPostComponent {

  private nextId = 0;
  //TODO:Isso da qui tem que ser componentizado de uma forma melhor, para isso precisamos ter um componente
  //Principal para o formulário e para onde podemos visualizar as postagens criadas
  //E também precisamos de um componente para o fomulario e para onde podemos visualizar as postagens criadas

  constructor (private blogService: BlogService) {}

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
    if (!this.choiced) return
    if (!form.value[this.choiced]) return

    const post: Post = {
      id: this.nextId++,
      element: this.choiced,
      content: this.choiced !== 'image' ? form.value[this.choiced] :  URL.createObjectURL(form.value[this.choiced])
    }
    this.elements.push(post)
  }

  removeElement(id: number): void {
    if(!id) return

    this.elements = this.elements.filter((element : Post) => element.id !== id);
  }

  //Talvez seja interessante colocar a opção de inserir em algum lugar especifico também
  //Ex: inserir no inicio, no meio ou no fim da postagem

  enviarPostagem(): void {
    //TODO: aqui ele deve enviar os dados para o back, basta enviar this.elements, porém também é necessário enviar
    //um array auxiliar para indicar a ordem em que os elementos devem ficar.
    //Já que lidamos com linguagens fortemente tipadas precisamos de um array para cada tipo de elemento, e a ordem de cada um é dada pelo array auxiliar antes mencionado.
    console.log(this.elements);
  }

}
