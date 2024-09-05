import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { Chat } from '../models/chat';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = "https://biblioteca-swap-back.vercel.app";
  // private url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  submitRating(idRater: number, idRated: number, rating: number, comment: string): Observable<void> {
    const ratingData = {
      id_rater: idRater,
      id_rated: idRated,
      rating: rating,
      comment: comment
    };
    return this.http.post<void>(`${this.url}/ratings`, ratingData);
  }

  obtenerChatsUsuario(id_user: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/obtenerChatsUsuario/${id_user}`);
  }

  obtenerMensajes(id_user1: number, id_user2: number): Observable<Chat[]> {
    return this.http.get<Chat[]>(`${this.url}/obtenerMensajes/${id_user1}/${id_user2}`);
  }

  enviarMensaje(newMessage: Chat): Observable<any> {
    return this.http.post<any>(`${this.url}/enviarMensaje`, newMessage);
  }

  getChatUsers(userId: number): Observable<{ user: Usuario, lastMessage: Chat }[]> {
    return this.http.get<{ user: Usuario, lastMessage: Chat }[]>(`${this.url}/getChatUsers/${userId}`);
}

  getChatUser(userId: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/getChatUser/${userId}`);
  }

}
