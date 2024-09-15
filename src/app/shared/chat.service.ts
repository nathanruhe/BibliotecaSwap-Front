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

  private url = "https://biblioteca-swap-back.vercel.app";
  // private url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  // Obtener los usuarios con los que ha tenido conversaciones
  getUsersWithChats(userId: number): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/api/users/${userId}/chats`);
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