import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/shared/book.service';
import { ChatService } from 'src/app/shared/chat.service';
import { UserService } from 'src/app/shared/user.service';
import { Usuario } from 'src/app/models/usuario';
import { Chat } from 'src/app/models/chat';
import { Respuesta } from 'src/app/models/respuesta';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public libro: Libro;
  public userId1: number = 1; 
  public userId2: number; 

  public userOwner: Usuario; // Usuario propietario
  public userOther: Usuario; // Usuario solicitante
  public idRated!: number;  // ID del usuario que recibe la valoración
  public idRater!: number;  // ID del usuario que hace la valoración
  public rating!: number;   // Valoración en estrellas
  public comment!: string;  // Comentario
  public stars: number[] = [1, 2, 3, 4, 5]; // Para valorar las estrellas
  public estadoLibroAceptado: boolean = false; // boton para aceptar el intercambio
  public estadoResenaEnviada: boolean = false // boton formulario
  public ratingForm: FormGroup; // formulario valoracion

  mensajes: Chat[] = [];
  chatList: any[] = [];
  nuevoMensaje: string = '';
  selectedUser: Usuario;
  
  chats: any[] = [];
  selectedChat: any; 

  constructor(private bookService: BookService, private chatService: ChatService, private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit() {
    const storedLibro = sessionStorage.getItem('selectedLibro');
    if (storedLibro) {
      // Muestro la info del libro si existe
      this.libro = JSON.parse(storedLibro);
    } else {
      this.libro = this.bookService.getSelectedBook();
      if (this.libro) {
        sessionStorage.setItem('selectedLibro', JSON.stringify(this.libro));
      } else {
        console.error('No se encontró el libro en el servicio.');
      }
    }

    // para importar el id del userOther
    this.route.params.subscribe(params => {
      const ownerId = +params['ownerId'];
      this.loadUserOther(ownerId);
    });

    // Verifica si el usuario logueado está disponible
    this.userService.user$.subscribe((user: Usuario) => {
      if (user && user.id_user) {
        this.userOwner = user;
        this.idRater = this.userOwner.id_user;
        console.log("Usuario logueado:", this.userOwner);
      } else {
        console.error("Error: Usuario no está definido o no tiene id_user.");
      }
    });
    
    this.loadChatUsers();

    // formulario
    this.ratingForm = this.fb.group({
      rating: [this.rating, Validators.required],
      comment: [this.comment]
    });
  }

  loadChatUsers() {
    this.chatService.getChatUsers(this.userId1).subscribe(usersWithLastMessages => {
        this.chatList = usersWithLastMessages;
        // this.chatList = usersWithLastMessages.sort((a, b) => new Date(b.lastMessage.timestamp).getTime() - new Date(a.lastMessage.timestamp).getTime());
        console.log(this.chatList);
        if (this.chatList.length > 0) {
          this.selectUser(this.chatList[0].id_user1)
        }
    });
  }

  selectUser(userId: number) {
    this.userId2 = userId;
    console.log(this.userId2)
    this.obtenerMensajes();
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
  
  // carga de datos
  loadUserOther(ownerId: number) {
    this.userService.getUserById(ownerId).subscribe((resp: Respuesta) => {
      if (!resp.error) {
        // cargo la info del propietario del libro
        this.userOther = resp.dataUser;
        // añado el id del usuario para poderle poner la reseña
        this.idRated = resp.dataUser.id_user;
        console.log("datos del propietario del libro:", this.userOther);
        console.log("datos del libro solicitado:", this.libro);
      }
    });
  }

  // calcular estrellas
  rate(stars: number) {
    this.rating = stars;
    this.ratingForm.patchValue({ rating: stars });
  }

  // realizar valoracion
  submitRating() {
    if (this.ratingForm.valid) {
      this.estadoResenaEnviada = true;
      const { rating, comment } = this.ratingForm.value;
      this.userService.submitRating(this.idRated, this.idRater, rating, comment).subscribe((resp: Respuesta) => {
        if (!resp.error) {
          this.ratingForm.reset();
          console.log(resp);
        };
      });
    };
  };

  // cambio estado libro, añado fechas prestamo, añado persona prestada
  cambiarEstadoLibro() {
    if (this.libro) {
      const currentDate = new Date();
      const endDate = new Date();
      endDate.setDate(currentDate.getDate() + 10);
  
      const updateData = {
        status: 'Prestado',
        start_date: currentDate.toISOString().split('T')[0],
        end_date: endDate.toISOString().split('T')[0],
        borrower: this.userOther.id_user
      };
  
      this.bookService.updateBookStatus(this.libro.id_book, updateData).subscribe((resp: Respuesta) => {
        if (!resp.error) {
          this.libro = resp.book;
          sessionStorage.removeItem('selectedLibro');
          this.estadoLibroAceptado = true;
          console.log(resp);
        } else {
          console.error('Error al actualizar el estado del libro');
        }
      }, error => {
        console.error('Error en la solicitud de actualización del estado del libro:', error);
      });
    }
  }
}