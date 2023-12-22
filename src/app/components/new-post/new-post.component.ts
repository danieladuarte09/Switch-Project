import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.scss'
})
export class NewPostComponent {

  /**Hacemos uso de formularios reactivos para los campos de creación del nuevo post y para obtener los datos con mayor facilidad */

  public form!: FormGroup;
  showPost = false;
  posts: any[] = [];
  

  constructor(private formBiulder: FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBiulder.group(
       {
      title: ['', Validators.required],
      content: ['', Validators.required],
   
    })

  }


/**Función crear un nuevo post y alamacenarlo en el array */
  addPost(form: FormGroup) {
       
    const newPost = this.form.value;
    
    this.posts.push(newPost);

    // Invierte el array para obtener el orden descendente
    this.posts.reverse();
    
    //muestra el post cuando pulsamos "enviar"
    this.showPost = true;
    //Elimina los valores del input
    form.reset();

  }

  

  

}
  
