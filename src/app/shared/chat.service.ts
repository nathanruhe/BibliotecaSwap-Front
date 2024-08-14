import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://localhost:3000';  

  constructor(private http: HttpClient) { }

  obtenerMensajes(id_user1: number, id_user2: number): Observable<Chat[]> {
    const url = `${this.apiUrl}/obtenerMensajes/${id_user1}/${id_user2}`;
    return this.http.get<Chat[]>(url);
  }

  enviarMensaje(data: any): Observable<any> {
    const url = `${this.apiUrl}/enviarMensaje`;
    return this.http.post<any>(url, data);
  }
}
