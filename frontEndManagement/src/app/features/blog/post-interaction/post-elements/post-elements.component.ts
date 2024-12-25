import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import Post  from '../../Post';
@Component({
  selector: 'post-elements',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './post-elements.component.html',
  styleUrl: './post-elements.component.css'
})
export class PostElementsComponent {

  _elements: Post[] = [
  ]

  @Output()
  elementsChange = new EventEmitter<Post[]>();

  @Input()
  get elements(): Post[] {
    return this._elements;
  }

  set elements(value: Post[]) {
    this._elements = value
    this.elementsChange.emit(value)
  }

  removeElement(id: number): void {
    if(!id) return
    this.elements = this.elements.filter((element : Post) => element.id !== id);
  }
}
