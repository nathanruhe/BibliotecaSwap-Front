import { Chat } from './chat';
import { Message } from './message';

export class Usuario {
  constructor(
    public id_user: number,
    public name: string,
    public last_name: string,
    public email: string,
    public photo: string,
    public about: string,
    public rating: number,
    public province: string,
    public availability: string,
    public genres: string[],
    public password: string,
    public hidden: boolean = false,
    public totalResenas: number = 0,
    public totalNoLeido?: number,
    public chats?: Chat[],
    public mensajes?: { [chatId: number]: Message[] },
    public id_chat?: number
  ) {}
}
