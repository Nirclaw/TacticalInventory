import { Expose, Transform } from "class-transformer";

export class buscarCarabinaId {
    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    carabina_serial: number;

    constructor(ID: number) {
        this.carabina_serial = ID
    }

}

export class createCarabina {
    @Expose({ name: "capacidad_cargador" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    carabina_capacidad: number

    @Expose({ name: "calibre" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    carabina_calibre: number

    @Expose({ name: "nombre" })
    @Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    carabina_nombre: string

    @Expose({ name: "pais_origen" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    carabina_pais_origen: string

    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    carabina_serial: number

    @Expose({ name: "clase_arma" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    carabina_clase_id: number

    constructor(carabina_capacidad: number,
        carabina_calibre: number,
        carabina_nombre: string,
        carabina_pais_origen: string,
        carabina_serial: number,
        carabina_clase_id: number) {

        this.carabina_capacidad = carabina_capacidad
        this.carabina_calibre = carabina_calibre
        this.carabina_nombre = carabina_nombre
        this.carabina_pais_origen = carabina_pais_origen
        this.carabina_serial = carabina_serial
        this.carabina_clase_id = carabina_clase_id
    }

}