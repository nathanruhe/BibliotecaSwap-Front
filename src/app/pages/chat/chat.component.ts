import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { ChatService } from 'src/app/shared/chat.service';
import { Usuario } from 'src/app/models/usuario';
import { Message } from 'src/app/models/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/shared/book.service';
import { Libro } from 'src/app/models/libro';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';
import { Chat } from 'src/app/models/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  @ViewChild('messageContainer') messageContainer!: ElementRef; // Referencia al contenedor de mensajes

  users: Usuario[] = [];
  messages: Message[] = [];
  selectedChatId: number | null = null;
  newMessage: string = ''; // Inicializa newMessage

  chats: Chat[] = []; // Almacena los chats del usuario
  mensajes: { [chatId: number]: Message[] } = {}; // Almacena los mensajes por cada chat
  totalNoLeidos: number = 0;

  public libro: Libro;
  public userOwner: Usuario; // Usuario propietario
  public userOther: Usuario; // Usuario solicitante
  public idRated!: number; // ID del usuario que recibe la valoración
  public idRater!: number; // ID del usuario que hace la valoración
  public rating!: number; // Valoración en estrellas
  public comment!: string; // Comentario
  public stars: number[] = [1, 2, 3, 4, 5]; // Para valorar las estrellas
  public estadoLibroAceptado: boolean = false; // boton para aceptar el intercambio
  public estadoResenaEnviada: boolean = false; // boton formulario
  public ratingForm: FormGroup; // formulario valoracion

  // mensajes: Chat[] = [];
  chatList: any[] = [];
  nuevoMensaje: string = '';
  selectedUser: Usuario;

  // chats: any[] = [];
  selectedChat: any;
  constructor(
    private bookService: BookService,
    private chatService: ChatService,
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
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

    // para importar el id del userOther +params['ownerId']
    const ownerId =
      this.route.snapshot.params['ownerId'] ??
      this.userService.getUser().id_user;

    // Verifica si el usuario logueado está disponible
    this.userService.user$.subscribe((user: Usuario) => {
      if (user) {
        this.userOwner = user;
        this.userService.getUserById(ownerId).subscribe((resp: Respuesta) => {
          if (!resp.error) {
            // cargo la info del propietario del libro
            this.userOther =
              resp.dataUser.id_user === this.userService.getUser().id_user
                ? undefined
                : resp.dataUser;
            // añado el id del usuario para poderle poner la reseña
            this.idRated = resp.dataUser.id_user;
            console.log('datos del propietario del libro:', this.userOther);
            console.log('datos del libro solicitado:', this.libro);
            this.loadUsers();
          }
        });

        this.idRater = user.id_user;

        if (user.chats) {
          this.chats = user.chats;
          this.calculateTotalNoLeidos(); // Llamar después de asignar los chats
        } else {
          console.log('El usuario no tiene chats.');
        }

        if (user.mensajes) {
          this.mensajes = user.mensajes;
          console.log('Mensajes del usuario logueado:', this.mensajes);
        } else {
          console.log('El usuario no tiene mensajes.');
        }
      } else {
        console.error('Error: Usuario no está definido o no tiene id_user.');
      }
    });

    // this.loadChatUsers();

    // formulario
    this.ratingForm = this.fb.group({
      rating: [this.rating, Validators.required],
      comment: [this.comment],
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom(); // Llama a la función después de que la vista esté actualizada
  }

  scrollToBottom(): void {
    try {
      this.messageContainer.nativeElement.scrollTop =
        this.messageContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error al hacer scroll: ', err);
    }
  }

<<<<<<< HEAD
  selectChat(chatId: number): void {
    this.selectedChatId = chatId;
  
    // Resetea la información del libro al cambiar de chat
    this.libro = null;  // Aquí se limpia la información del libro
  
    if (this.selectedChatId !== null) {
      this.chatService.getMessages(this.selectedChatId).subscribe(
        (response: any) => {
          if (!response.error) {
            this.messages = response.messages;
  
            this.updateUserOther(chatId).then(() => {
              this.cdr.detectChanges();
              if (this.userOther && this.userOther.id_user) {
                this.router.navigate([`/chat/${this.userOther.id_user}`]);
              } else {
                console.error('ID del usuario no está disponible para redirigir.');
              }
  
              this.chatService.resetUnreadMessages(this.selectedChatId, this.userOwner.id_user).subscribe(
                () => {
                  this.updateChatInView(this.selectedChatId);
                },
                error => console.error('Error al resetear mensajes no leídos', error)
              );
            }).catch(err => console.error('Error al actualizar `userOther`: ', err));
          } else {
            console.error(response.message);
          }
        },
        error => console.error('Error al cargar mensajes', error)
      );
    }
  }

  /*
  selectChat(chatId: number): void {
    this.selectedChatId = chatId;

    this.userService.user$.subscribe((user: Usuario) => {
      if (user.chats) {
        this.chats = user.chats;
        console.log("Chats del usuario logueado:", this.chats);
      } else {
        console.log("El usuario no tiene chats.");
      }
    });
=======
  selectChat(user: Usuario): void {
    this.selectedChatId = user.id_chat;
>>>>>>> dia10_Judit

    if (this.selectedChatId !== null) {
      this.chatService.getMessages(this.selectedChatId).subscribe(
        (response: any) => {
          if (!response.error) {
            this.messages = response.messages;
            this.userOther = user;
            this.updateUserOther(this.selectedChatId)
              .then(() => {
                // Forzar detección de cambios
                this.cdr.detectChanges();

                // Esperar un poco para asegurar que la vista se actualice
                if (this.userOther && this.userOther.id_user) {
                  this.router.navigate([`/chat/${this.userOther.id_user}`]);
                } else {
                  console.error(
                    'ID del usuario no está disponible para redirigir.'
                  );
                }
                // Ajusta el tiempo si es necesario

                this.chatService
                  .resetUnreadMessages(
                    this.selectedChatId,
                    this.userOwner.id_user
                  )
                  .subscribe(
                    () => {
                      this.updateChatInView(this.selectedChatId);
                    },
                    (error) =>
                      console.error(
                        'Error al resetear mensajes no leídos',
                        error
                      )
                  );
              })
              .catch((err) =>
                console.error('Error al actualizar userOther: ', err)
              );
          } else {
            console.error(response.message);
          }
        },
        (error) => console.error('Error al cargar mensajes', error)
      );
    }
  }
<<<<<<< HEAD
  */
=======
>>>>>>> dia10_Judit

  updateChatInView(chatId: number): void {
    const updatedChat = this.chats.find((c) => c.id_chat === chatId);
    if (updatedChat) {
      if (this.userOwner.id_user === updatedChat.id_user1) {
        updatedChat.noLeido_user1 = 0;
      } else if (this.userOwner.id_user === updatedChat.id_user2) {
        updatedChat.noLeido_user2 = 0;
      }
    }
    // Recalcula el total de mensajes no leídos
    this.calculateTotalNoLeidos();
  }

  updateUserOther(chatId: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const chat = this.chats.find((c) => c.id_chat === chatId);
      if (chat) {
        const otherUserId =
          chat.id_user1 === this.userOwner.id_user
            ? chat.id_user2
            : chat.id_user1;

        this.userService.getUserById(otherUserId).subscribe(
          (response: Respuesta) => {
            if (!response.error) {
              this.userOther = response.dataUser;
              console.log('Usuario seleccionado:', this.userOther);
              resolve(); // Resuelve la promesa cuando se ha actualizado userOther
            } else {
              reject('Error en la respuesta: ' + response.mensaje); // Rechaza la promesa si hay un error
            }
          },
          (error) => reject('Error al obtener usuario: ' + error) // Rechaza la promesa en caso de error
        );
      } else {
        reject('Chat no encontrado'); // Rechaza la promesa si el chat no se encuentra
      }
    });
  }

  getMensajesPorChat(chatId: number): Message[] {
    return this.mensajes[chatId] || []; // Devuelve los mensajes para el chatId seleccionado
  }

  getUserOtherForChat(chatId: number): Usuario | undefined {
    const chat = this.chats.find((c) => c.id_chat === chatId);
    if (chat) {
      return chat.id_user1 === this.userOwner.id_user
        ? this.getUserById(chat.id_user2)
        : this.getUserById(chat.id_user1);
    }
    return undefined;
  }

  getUserById(userId: number): Usuario | undefined {
    return this.users.find((user) => user.id_user === userId);
  }

  calculateNoLeidosForChat(chatId: number): number {
    if (!this.userOwner) return 0;

    const chat = this.chats.find((c) => c.id_chat === chatId);

    if (chat) {
      if (this.userOwner.id_user === chat.id_user1) {
        return chat.noLeido_user1 || 0;
      } else if (this.userOwner.id_user === chat.id_user2) {
        return chat.noLeido_user2 || 0;
      }
    }
    return 0;
  }

  calculateTotalNoLeidos(): void {
    this.totalNoLeidos = 0;

    if (this.userOwner && this.chats) {
      this.chats.forEach((chat) => {
        if (this.userOwner.id_user === chat.id_user1) {
          this.totalNoLeidos += chat.noLeido_user1 || 0;
        } else if (this.userOwner.id_user === chat.id_user2) {
          this.totalNoLeidos += chat.noLeido_user2 || 0;
        }
      });
    }
    console.log('Total mensajes no leídos:', this.totalNoLeidos);
  }

  loadUsers(): void {
    if (this.userOwner) {
      this.chatService.getUsersWithChats(this.userOwner.id_user).subscribe(
        (data: Usuario[]) => {
          this.users = data;
          const chat = this.users.find(
            (user) => user.id_user === this.userOther.id_user
          );
          this.selectChat(chat);
          console.log('Usuarios cargados:', this.users);
        },
        (error) => {
          console.error('Error al cargar usuarios', error);
        }
      );
    }
  }

  sendMessage() {
    if (this.newMessage.trim() && this.userOwner) {
      const messageData = {
        id_user1: this.userOwner.id_user,
        id_user2: this.userOther.id_user,
        emisor: this.userOwner.id_user,
        message: this.newMessage,
      };

      this.chatService.sendMessage(messageData).subscribe(
        (response) => {
          const newMessage: Message = {
            id_message: response.id_message,
            id_chat: this.selectedChatId,
            id_sender: messageData.emisor,
            id_receiver: messageData.id_user2,
            message: this.newMessage,
            timestamp: new Date(),
          };

          // Agrega el mensaje nuevo a la colección de mensajes del chat seleccionado
          this.messages.push(newMessage);

          if (
            this.users.length === 0 ||
            !this.users.find((user) => user.id_user === newMessage.id_receiver)
          ) {
            this.users.push(this.userOther);
            window.location.reload();
          }

          this.newMessage = ''; // Limpia el campo de mensaje
          // this.calculateTotalNoLeidos(); // Actualiza el total de mensajes no leídos
        },
        (error) => {
          console.error('Error enviando mensaje', error);
        }
      );
    }
  }

  deleteChat(): void {
    if (this.userOther && this.userOther.id_user) {
      this.chatService.deleteChatsByUserId(this.userOther.id_user).subscribe(
        (response) => {
          console.log('Chats eliminados correctamente', response);

          // Filtra el chat eliminado de la lista local
          this.users = this.users.filter(
            (chat) => chat.id_chat !== this.selectedChatId
          );
          this.userOther = undefined;

          // Limpia la selección del chat actual
          this.selectedChatId = null;

          // Recalcula el total de mensajes no leídos
          this.calculateTotalNoLeidos();

          // Fuerza la detección de cambios para actualizar la vista
          this.cdr.detectChanges();
          // Redirigir si es necesario
          this.router.navigate(['/chat']);
        },
        (error) => {
          console.error('Error al eliminar los chats:', error);
        }
      );
    } else {
      console.error('No se encontró el ID del usuario');
    }
  }

  // Redireccionar al perfil del usuario
  goToUserProfile(userId: number): void {
    this.router.navigate([`/perfil-otros/${this.userOther.id_user}`]);
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
      this.userService
        .submitRating(this.idRated, this.idRater, rating, comment)
        .subscribe((resp: Respuesta) => {
          if (!resp.error) {
            this.ratingForm.reset();
            this.rating = 0;
            console.log(resp);
          }
        });
    }
  }

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
        borrower: this.userOther.id_user,
      };

      this.bookService
        .updateBookStatus(this.libro.id_book, updateData)
        .subscribe(
          (resp: Respuesta) => {
            if (!resp.error) {
              this.libro = resp.book;
              sessionStorage.removeItem('selectedLibro');
              this.estadoLibroAceptado = true;
              console.log(
                'Estado del libro aceptado:',
                this.estadoLibroAceptado
              );
            } else {
              console.error('Error al actualizar el estado del libro');
            }
          },
          (error) => {
            console.error(
              'Error en la solicitud de actualización del estado del libro:',
              error
            );
          }
        );
    }
  }
}
