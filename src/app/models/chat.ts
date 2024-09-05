export class Chat {

    constructor(
        public id_message: number,
        public id_sender:number,
        public id_receiver: number,
        public message: string,
        public timestamp: Date
    ) {}
}
