import { Component, Input } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-card',
  standalone: false,
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {

  @Input() post!: Post; 
 
  likePost() {
    this.post.likes++;
  }

}
