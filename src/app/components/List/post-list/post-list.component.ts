import { Component } from '@angular/core';
import { ApiService } from '../../../services/ApiService';
import { Album, Post, PhotoList, Todo, User } from '../../../Model/post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  
})
export class PostListComponent  {
  posts: Post[] = [];

  
  comments: Comment[]= [] ;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(posts => this.posts = posts);
  
  }
}



