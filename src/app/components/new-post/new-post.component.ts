import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.scss'
})
export class NewPostComponent {

  posts: any[] = [];
  nuevoPost: any = { titulo: '', contenido: '' };

  addPost() {
    this.posts.push({ ...this.nuevoPost });
    this.nuevoPost = { titulo: '', contenido: '' };
  }

}
