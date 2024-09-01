import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { Chat } from '../models/chat';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // private url = "https://biblioteca-swap-back.vercel.app";
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getChatUser(userId: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/users/${userId}`);
  }

  submitRating(idRater: number, idRated: number, rating: number, comment: string): Observable<void> {
    const ratingData = {
      id_rater: idRater,
      id_rated: idRated,
      rating: rating,
      comment: comment
    };
    return this.http.post<void>(`${this.url}/ratings`, ratingData);
  }

  obtenerMensajes(id_user1: number, id_user2: number): Observable<Chat[]> {
    const url = `${this.url}/obtenerMensajes/${id_user1}/${id_user2}`;
    return this.http.get<Chat[]>(url);
  }

  enviarMensaje(data: any): Observable<any> {
    const url = `${this.url}/enviarMensaje`;
    return this.http.post<any>(url, data);
  }
}
