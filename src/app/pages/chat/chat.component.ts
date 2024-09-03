import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Libro } from 'src/app/models/libro'; 
import { BookService } from 'src/app/shared/book.service';
import { ChatService } from 'src/app/shared/chat.service';
import { Usuario } from 'src/app/models/usuario';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public libro: Libro;
  public userOwner: Usuario;
  public userOther: Usuario;
  public ratingForm: FormGroup;

  constructor(private bookService: BookService, private chatService: ChatService, private fb: FormBuilder) {}

  ngOnInit() {
    this.libro = this.bookService.getSelectedBook();
    this.loadChatUser();
    this.initForm();
  }

  initForm() {
    this.ratingForm = this.fb.group({
      rating: [0, Validators.required],
      comment: ['', Validators.required]
    });
  }

  loadChatUser() {
    this.chatService.getChatUser(this.userOther.id_user).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        this.userOther.name = resp.dataUser.name
      }
    });
  }

  submitRating() {
    if (this.ratingForm.valid) {
      const { rating, comment } = this.ratingForm.value;
      this.chatService.submitRating(this.userOwner.id_user, this.userOther.id_user, rating, comment).subscribe(
        () => {
          this.ratingForm.reset();
        }
      )
    }
  }

  cambiarEstadoLibro() {
    if (this.libro) {
      this.libro.status = false;
    }
  }
}