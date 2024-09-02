import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

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
}
