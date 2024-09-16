export class Chat {
    constructor(
        public id_chat: number,
        public id_user1: number,
        public id_user2: number,
        public noLeido_user1: number,
        public noLeido_user2: number,
        public user2_name: string,
        public user2_last_name: string,
        public user2_photo: string,
    ) {}
}
