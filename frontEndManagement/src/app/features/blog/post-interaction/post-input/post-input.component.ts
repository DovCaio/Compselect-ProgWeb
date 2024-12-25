import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FileInputComponent } from '../../../../components/inputs/file-input/file-input.component';
import Post from '../../Post';
import { FormsModule } from '@angular/forms';


interface PostElement {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'post-input',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FileInputComponent,
    FormsModule
  ],
  templateUrl: './post-input.component.html',
  styleUrl: './post-input.component.css'
})
export class PostInputComponent {

  private nextId = 0

  postElements: PostElement[] = [
    {value: 'image', viewValue: 'Imagen'},
    {value: 'tittle', viewValue: 'Titulo'},
    {value: 'text', viewValue: 'Texto'},
    {value: 'link', viewValue: 'Link'}
  ]

  private elements_: Post[] = [
  ]

  @Output()
  elementsChange = new EventEmitter<Post[]>()

  @Input()
  get elements(): Post[] {
    return this.elements_
  }

  set elements(value: Post[]) {
    this.elements_ = value
    this.elementsChange.emit(value)
  }

  private choiced_ = ""

  @Output()
  choicedChange = new EventEmitter<string>()

  @Input()
  get choiced(): string {
    return this.choiced_
  }

  set choiced(value: string) {
    this.choiced_ = value
    this.choicedChange.emit(value)
  }

  
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

  enviarPostagem(): void {
    //TODO: aqui ele deve enviar os dados para o back, basta enviar this.elements, porém também é necessário enviar
    //um array auxiliar para indicar a ordem em que os elementos devem ficar.
    //Já que lidamos com linguagens fortemente tipadas precisamos de um array para cada tipo de elemento, e a ordem de cada um é dada pelo array auxiliar antes mencionado.
    console.log(this.elements);
  }
}
