export class Resena {
  constructor(
    public nombre: string,
    public apellido: string,
    public valoracion: number,
    public comentario: string,
    // public id_rating: number,
    // public id_rater: number,
    // public id_rated: number,
    // public rating: number,
    // public comment: string
  ) { }
}


    // como todavía no tenemos BBDD con los usuarios y demas.. dejo esta parte comentada para que no nos pete el front con lo que tengamos hardcodeado, y cuando ya tengamos la BBDD y podamos acceder a los usuarios y sus nombres y apellidos, lo modifico.