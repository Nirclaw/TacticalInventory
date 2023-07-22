import { Expose, Transform } from "class-transformer";

export class buscarClaseId {
    @Expose({ name: "id_clase" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value)){
            return value
        }           
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    clase_id: number;




    constructor(ID: number) {
        this.clase_id = ID
    }
}

export class createClase {
    @Expose({ name: "nombre_clase" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    clase_nombre: String


    constructor(nombre: string,) {

        this.clase_nombre = nombre

    }
}