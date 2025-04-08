import { Component } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts!: Post[];
  
  constructor(private postService: PostService) {} // Injection du service

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}
