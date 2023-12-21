import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album, Post, PhotoList, Todo, User } from '../Model/post.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const url = `${this.baseUrl}/posts`;
    return this.http.get<Post[]>(url);
  }

  getComments(): Observable<Comment[]> {
    const url = `${this.baseUrl}/comments`;
    return this.http.get<Comment[]>(url);
  }

  getAlbums(): Observable<Album[]> {
    const url = `${this.baseUrl}/albums`;
    return this.http.get<Album[]>(url);
  }

  getPhotos(): Observable<PhotoList[]> {
    const url = `${this.baseUrl}/photos`;
    console.log(url)
    return this.http.get<PhotoList[]>(url);
  }

  getTodos(): Observable<Todo[]> {
    const url = `${this.baseUrl}/todos`;
    return this.http.get<Todo[]>(url);
  }

  getUsers(): Observable<User[]> {
    const url = `${this.baseUrl}/users`;
    return this.http.get<User[]>(url);
  }
}