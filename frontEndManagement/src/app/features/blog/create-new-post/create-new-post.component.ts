import { Component } from '@angular/core';
import { BlogService } from  '../../../shared/blog/blog.service';

import { PostInteractionComponent } from '../post-interaction/post-interaction.component';

interface PostElement {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-new-post',
  standalone: true,
  imports: [
    PostInteractionComponent
  ],
  templateUrl: './create-new-post.component.html',
  styleUrl: './create-new-post.component.css'
})
export class CreateNewPostComponent {

  constructor (private blogService: BlogService) {}

  

}
