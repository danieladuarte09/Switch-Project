import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent  {


  messageForm!: FormGroup;
  newMessages: any[] = [];
  show: boolean = false;

  constructor(private messageBiulder: FormBuilder){}

  ngOnInit(): void {
    this.messageForm = this.messageBiulder.group(
       {
      content: ['', Validators.required],
   
    })
  }

sendMessage() {
  
    const Message = this.messageForm.value;
    this.newMessages.push(Message);

    this.show = true;
    this.newMessages.reverse();
    this.messageForm.reset();
}
}
