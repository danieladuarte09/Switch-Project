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
  albums: Album[]= [];

  todos: Todo[]= [];
  users: User[]= [];
  PhotoList: PhotoList[] = [];


  

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(posts => this.posts = posts);
    this.apiService.getComments().subscribe(comments => this.comments = comments);
    this.apiService.getAlbums().subscribe(albums => this.albums = albums);
    this.apiService.getPhotos().subscribe(photos => this.PhotoList = photos);
    this.apiService.getTodos().subscribe(todos => this.todos = todos);
    this.apiService.getUsers().subscribe(users => this.users = users);
  }
}



