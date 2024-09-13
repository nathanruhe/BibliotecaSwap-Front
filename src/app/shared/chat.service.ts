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

  obtenerChatsUsuario(id_user: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/chat/obtenerChatsUsuario/${id_user}`);
  }  

  obtenerMensajes(id_chat: number, userId: number): Observable<Chat[]> {
    return this.http.get<Chat[]>(`${this.url}/chat/obtenerMensajes/${id_chat}/${userId}`);
  }   

  enviarMensaje(newMessage: Chat): Observable<any> {
    return this.http.post<any>(`${this.url}/enviarMensaje`, newMessage);
  }  

  getChatUsers(userId: number): Observable<{ user: Usuario, lastMessage: Chat }[]> {
    return this.http.get<{ user: Usuario, lastMessage: Chat }[]>(`${this.url}/chat/obtenerChatsUsuario/${userId}`);
  }  

  getChatUser(userId: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/getChatUser/${userId}`);
  }

}
