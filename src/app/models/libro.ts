import { Usuario } from "./usuario";

export class Libro {

    constructor(
        public title: string, 
        public author: string,  
        public genre: string, 
        public photo: string, 
        public language: string, 
        public borrower: Usuario, 
        public start_date: Date = null,
        public end_date: Date = null,
        public like: boolean = false, 
        public status: boolean = true, 
        public id_book: number = 0, 
        public owner: number = 0) 
    {
       
    }
}