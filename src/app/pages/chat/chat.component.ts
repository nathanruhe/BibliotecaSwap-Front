import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Libro } from 'src/app/models/libro'; 
import { BookService } from 'src/app/shared/book.service';
import { ChatService } from 'src/app/shared/chat.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public libro: Libro;
  public nombreUsuario: string = '';
  public userId1: number = 1;
  private userId2: number = 2;
  public ratingForm: FormGroup;

  mensajes: any[] = [];
  nuevoMensaje: string = '';
  id_user1 = 1;  
  id_user2 = 2;  

  constructor(private bookService: BookService, private chatService: ChatService, private fb: FormBuilder) {}

  ngOnInit() {
    this.libro = this.bookService.getSelectedBook();
    this.loadChatUser();
    this.initForm();
    this.obtenerMensajes();
  }

  initForm() {
    this.ratingForm = this.fb.group({
      rating: [0, Validators.required],
      comment: ['', Validators.required]
    });
  }

  loadChatUser() {
    this.chatService.getChatUser(this.userId2).subscribe(user => {
        this.nombreUsuario = user.name;
    });
  }

  submitRating() {
    if (this.ratingForm.valid) {
      const { rating, comment } = this.ratingForm.value;
      this.chatService.submitRating(this.userId1, this.userId2, rating, comment).subscribe(
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

  obtenerMensajes(): void {
    this.chatService.obtenerMensajes(this.id_user1, this.id_user2).subscribe(
      data => {
        this.mensajes = data;
      },
      error => {
        console.error('Error al obtener los mensajes', error);
      }
    );
  }

  enviarMensaje(): void {
    if (this.nuevoMensaje.trim()) {
      const data = {
        id_user1: this.id_user1,
        id_user2: this.id_user2,
        emisor: 'user2',  
        message: this.nuevoMensaje
      };
      
      this.chatService.enviarMensaje(data).subscribe(
        response => {
          if (!response.error) {
            this.obtenerMensajes();  
            this.nuevoMensaje = ''; 
          } else {
            console.error('Error al enviar el mensaje', response.message);
          }
        },
        error => {
          console.error('Error en la solicitud', error);
        }
      );
    }
  }
}
