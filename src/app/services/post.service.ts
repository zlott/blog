import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private posts: Post[] = [ 
    {
      id: 1,
      title: 'Article numéro 1',
      content: 'This is the content of article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
      likes: 200,
      favorite: false,
      publicationDate: new Date('2023-10-01')
    },
    { 
      id: 2,
      title: 'Article numéro 2',
      content: 'This is the content of article 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
      likes: 0,
      favorite: false,
      publicationDate: new Date('2024-10-01')
    }
  ];
    
  constructor() { }

  public getPosts(): Post[] {
    return this.posts;
  }
  
  public getPostById(id: number): Post { 
    const post = this.posts.find(post => post.id === id);
    if (!post) {
      throw new Error(`Product with id ${id} not found`);
    }
    return post;
  }

}
