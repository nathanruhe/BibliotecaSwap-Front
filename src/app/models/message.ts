export interface Message {
    id_message: number;
    id_chat: number;
    id_sender: number;
    id_receiver: number;
    message: string;
    timestamp: Date;
  }