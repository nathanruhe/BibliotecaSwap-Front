import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../shared/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensajes: any[] = [];
  nuevoMensaje: string = '';
  id_user1 = 1;  
  id_user2 = 2;  

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.obtenerMensajes();
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
        emisor: 'user1',  
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
