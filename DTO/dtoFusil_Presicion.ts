import { Expose, Transform } from "class-transformer";

export class buscarFusilPresicionSerial {
    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    fusil_precision_serial: number;

    constructor(fusil_precision_serial: number) {
        this.fusil_precision_serial = fusil_precision_serial
    }

}

export class creatFusilPresicion {
    @Expose({ name: "capacidad_cargador" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    fusil_precision_capacidad: number

    @Expose({ name: "calibre" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    fusil_precision_calibre: number

    @Expose({ name: "nombre" })
    @Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    fusil_precision_nombre: string

    @Expose({ name: "pais_origen" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    fusil_precision_pais_origen: string

    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    fusil_precision_serial: number

    @Expose({ name: "clase_arma" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    fusil_precision_clase_id: number

    constructor(fusil_precision_capacidad: number,
        fusil_precision_calibre: number,
        fusil_precision_nombre: string,
        fusil_precision_pais_origen: string,
        fusil_precision_serial: number,
        fusil_precision_clase_id: number) {

        this.fusil_precision_capacidad = fusil_precision_capacidad
        this.fusil_precision_calibre = fusil_precision_calibre
        this.fusil_precision_nombre = fusil_precision_nombre
        this.fusil_precision_pais_origen = fusil_precision_pais_origen
        this.fusil_precision_serial = fusil_precision_serial
        this.fusil_precision_clase_id = fusil_precision_clase_id
    }

}