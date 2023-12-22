import { Component } from '@angular/core';
import { ApiService } from '../../services/ApiService';
import { CommentModel } from '../../Model/post.model';


@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrl: './explorer.component.scss'
})
export class ExplorerComponent {

  comments: CommentModel [] = [];
  

  constructor(private apiService: ApiService) {}

 //Nos suscribimos al servicio que obtiene los datos de la API
  ngOnInit(): void {
    this.apiService.getComments().subscribe(comments => this.comments = comments as unknown as CommentModel[]);
  

  }


}
