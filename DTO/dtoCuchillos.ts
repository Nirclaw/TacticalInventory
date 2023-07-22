import { Expose, Transform } from "class-transformer";

export class buscarCuchilloSerial {
    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    cuchillo_serial: number;

    constructor(cuchillo_serial: number) {
        this.cuchillo_serial = cuchillo_serial
    }

}

export class createCuchillo {
    @Expose({ name: "peso" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    cuchillo_peso: number;

    @Expose({ name: "longitud" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })

    cuchillo_longitu: number;
    @Expose({ name: "pais_origen" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    cuchillo_pais_origen: String;

    @Expose({ name: "nombre" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    cuchillo_nombre: String;

    @Expose({ name: "id_clase" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })

    cuchillo_clase_id: number;
    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    cuchillo_serial: number;


    constructor(cuchillo_peso: number,
        cuchillo_longitu: number,
        cuchillo_pais_origen: String,
        cuchillo_nombre: String,
        cuchillo_clase_id: number,
        cuchillo_serial: number) {
        this.cuchillo_peso = cuchillo_peso
        this.cuchillo_longitu = cuchillo_longitu
        this.cuchillo_pais_origen = cuchillo_pais_origen
        this.cuchillo_nombre = cuchillo_nombre
        this.cuchillo_clase_id = cuchillo_clase_id
        this.cuchillo_serial = cuchillo_serial

    }

}