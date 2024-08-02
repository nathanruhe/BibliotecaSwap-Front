export class Usuario {

    constructor(
        public id_user: number,
        public name:string,
        public last_name: string,
        public email: string,
        public photo: string,
        public about: string,
        public loan: number,
        public rating: number ,
        public province: string,
        public availability: string,
        public genders: string[],
        public password: string
    ) {}
}