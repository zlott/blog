import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-detail',
  standalone: false,
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {

  post!: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute, 
  ) {} 

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0); 
    this.post = this.postService.getPostById(id);
  }

  likePost() {
    this.post.likes++;
  }
  
}
