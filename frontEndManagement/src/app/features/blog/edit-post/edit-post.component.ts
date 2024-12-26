import { Component } from '@angular/core';
import { PostInteractionComponent } from '../post-interaction/post-interaction.component';
import { PostTableComponent } from './post-table/post-table.component';
@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [
    PostInteractionComponent,
    PostTableComponent
  ],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {

}
