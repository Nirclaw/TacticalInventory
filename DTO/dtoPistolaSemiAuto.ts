import { Expose, Transform } from "class-transformer";

export class buscarPistoSemiAutoSerial {
    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    pistola_semiauto_serial: number;

    constructor(pistola_semiauto_serial: number) {
        this.pistola_semiauto_serial = pistola_semiauto_serial
    }

}

export class creatPistoSemiAuto {
    @Expose({ name: "capacidad_cargador" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    pistola_semiauto_capacidad: number

    @Expose({ name: "calibre" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    pistola_semiauto_calibre: number

    @Expose({ name: "nombre" })
    @Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    pistola_semiauto_nombre: string

    @Expose({ name: "pais_origen" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    pistola_semiauto_pais_origen: string

    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    pistola_semiauto_serial: number

    @Expose({ name: "clase_arma" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    pistola_semiauto_clase_id: number

    constructor(pistola_semiauto_capacidad: number,
        pistola_semiauto_calibre: number,
        pistola_semiauto_nombre: string,
        pistola_semiauto_pais_origen: string,
        pistola_semiauto_serial: number,
        pistola_semiauto_clase_id: number) {

        this.pistola_semiauto_capacidad = pistola_semiauto_capacidad
        this.pistola_semiauto_calibre = pistola_semiauto_calibre
        this.pistola_semiauto_nombre = pistola_semiauto_nombre
        this.pistola_semiauto_pais_origen = pistola_semiauto_pais_origen
        this.pistola_semiauto_serial = pistola_semiauto_serial
        this.pistola_semiauto_clase_id = pistola_semiauto_clase_id
    }

}