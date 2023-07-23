import { Expose, Transform } from "class-transformer";

export class buscarGranadaSerial {
    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    granada_serial: number;

    constructor(ID: number) {
        this.granada_serial = ID
    }

}

export class createGranda {

    @Expose({ name: "peso" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    granada_peso: number

    @Expose({ name: "descruvtivo" })
    @Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    granada_destruivo: String
    @Expose({ name: "pais_origen" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    granada_pais_origen: String

    @Expose({ name: "nombre" })
    @Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    granada_nombre: String
    @Expose({ name: "clase_id" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    granada_clase_id: number
    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    granada_serial: number

    constructor(granada_peso: number,
        granada_destruivo: string,
        granada_pais_origen: string,
        granada_nombre: string,
        granada_clase_id: number,
        granada_serial: number) {
        this.granada_peso = granada_peso
        this.granada_destruivo = granada_destruivo
        this.granada_pais_origen = granada_pais_origen
        this.granada_nombre = granada_nombre
        this.granada_clase_id = granada_clase_id
        this.granada_serial = granada_serial
    }

}