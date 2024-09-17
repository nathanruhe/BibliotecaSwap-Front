import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { Chat } from 'src/app/models/chat';
import { Message } from 'src/app/models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // private url = "https://biblioteca-swap-back.vercel.app";
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  // obtenerChatsUsuario(id_user: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.url}/chat/obtenerChatsUsuario/${id_user}`);
  // }  

  // obtenerMensajes(id_chat: number, userId: number): Observable<Chat[]> {
  //   return this.http.get<Chat[]>(`${this.url}/chat/obtenerMensajes/${id_chat}/${userId}`);
  // }   

  // enviarMensaje(newMessage: Chat): Observable<any> {
  //   return this.http.post<any>(`${this.url}/enviarMensaje`, newMessage);
  // }  

  // getChatUsers(userId: number): Observable<any> {
  //   return this.http.get<any>(`${this.url}/chat/obtenerChatsUsuario/${userId}`);
  // }  

  // Obtener los usuarios con los que ha tenido conversaciones
  getUsersWithChats(id_user: number): Observable<Usuario[]> {
    // return this.http.get<Usuario[]>(`${this.url}/api/users/${userId}/chats`);
    return this.http.get<any[]>(`${this.url}//${id_user}/chats`);
  }

  // Obtener mensajes de un chat específico
  getMessages(chatId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.url}/chat/${chatId}/messages`);
  }

  // Enviar un mensaje
  sendMessage(messageData: { id_user1: number, id_user2: number, emisor: number, message: string }): Observable<any> {
    // Convertir la hora local a UTC
    const timestamp = new Date().toISOString();
    return this.http.post(`${this.url}/chat/enviarMensaje`, { ...messageData, timestamp });
  }

  // Resetear los mensajes no leídos
  resetUnreadMessages(chatId: number, userId: number): Observable<any> {
    return this.http.put(`${this.url}/chat/${chatId}/resetUnreadMessages/${userId}`, {});
  }

  // Elimina el chat
public deleteChatsByUserId(userId: number): Observable<any> {
  return this.http.delete<any>(`${this.url}/chat/${userId}`);
}

}