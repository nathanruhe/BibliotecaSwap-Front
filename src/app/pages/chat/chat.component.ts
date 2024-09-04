import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/shared/book.service';
import { ChatService } from 'src/app/shared/chat.service';
import { Usuario } from 'src/app/models/usuario';
import { Chat } from 'src/app/models/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public libro: any;
  public nombreUsuario: string = '';
  public userId1: number = 1; 
  public userId2: number; 

  mensajes: Chat[] = [];
  chatList: { user: Usuario, lastMessage: Chat }[] = [];
  nuevoMensaje: string = '';
  selectedUser: Usuario;
  ratingForm: FormGroup;

  chats: any[] = [];
  selectedChat: any; 

  constructor(private bookService: BookService, private chatService: ChatService, private fb: FormBuilder) {}

  ngOnInit() {
    this.libro = this.bookService.getSelectedBook();
    this.loadChatUsers();
    this.initForm();
  }

  initForm() {
    this.ratingForm = this.fb.group({
      rating: [0, Validators.required],
      comment: ['', Validators.required]
    });
  }

  loadChatUsers() {
    this.chatService.getChatUsers(this.userId1).subscribe(usersWithLastMessages => {
        this.chatList = usersWithLastMessages.sort((a, b) => new Date(b.lastMessage.timestamp).getTime() - new Date(a.lastMessage.timestamp).getTime());
        if (this.chatList.length > 0) {
          this.selectUser(this.chatList[0].user.id_user); 
        }
    });
  }

  selectUser(userId: number) {
    this.userId2 = userId;
    this.loadChatUser();
    this.obtenerMensajes();
  }

 loadChatUser() {
    this.chatService.getChatUser(this.userId2).subscribe(user => {
        this.selectedUser = user;
        this.nombreUsuario = `${user.name} ${user.last_name}`;
    });
  }

  submitRating() {
    if (this.ratingForm.valid) {
      const { rating, comment } = this.ratingForm.value;
      this.chatService.submitRating(this.userId1, this.userId2, rating, comment).subscribe(() => {
        this.ratingForm.reset();
      });
    }
  }

  cambiarEstadoLibro() {
    if (this.libro) {
      this.libro.status = false;
    }
  }

  obtenerMensajes() {
    this.chatService.obtenerMensajes(this.userId1, this.userId2).subscribe(data => {
      this.mensajes = data;
    }, error => {
      console.error('Error al obtener los mensajes', error);
    });
  }

  enviarMensaje() {
    if (this.nuevoMensaje.trim()) {
      const newMessage = new Chat(
        0,
        this.userId1,
        this.userId2,
        this.nuevoMensaje,
        new Date() 
      );
      
      this.chatService.enviarMensaje(newMessage).subscribe(response => {
        if (!response.error) {
          this.obtenerMensajes();  
          this.nuevoMensaje = ''; 
        } else {
          console.error('Error al enviar el mensaje', response.message);
        }
      }, error => {
        console.error('Error en la solicitud', error);
      });
    }
  }
}