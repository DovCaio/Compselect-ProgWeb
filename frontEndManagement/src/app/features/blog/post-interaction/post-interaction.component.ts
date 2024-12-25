import { Component } from '@angular/core';
import { PostInputComponent } from './post-input/post-input.component';
import { PostElementsComponent } from './post-elements/post-elements.component';
import Post from '../Post';
@Component({
  selector: 'post-interaction',
  standalone: true,
  imports: [ 
    PostInputComponent,
    PostElementsComponent
  ],
  templateUrl: './post-interaction.component.html',
  styleUrl: './post-interaction.component.css'
})
export class PostInteractionComponent {
  elements: Post[] = [];
  choiced: string = "";
}
