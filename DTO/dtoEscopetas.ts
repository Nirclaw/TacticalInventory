import { Expose, Transform } from "class-transformer";

export class buscarEscopSerial {
    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    escopeta_serial: number;

    constructor(escopeta_serial: number) {
        this.escopeta_serial = escopeta_serial
    }

}

export class creatEscopeta {
    @Expose({ name: "capacidad_cargador" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    escopeta_capacidad: number

    @Expose({ name: "calibre" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    escopeta_calibre: number

    @Expose({ name: "nombre" })
    @Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    escopeta_nombre: string

    @Expose({ name: "pais_origen" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    escopeta_pais_origen: string

    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    escopeta_serial: number

    @Expose({ name: "clase_arma" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    escopeta_clase_id: number

    constructor(escopeta_capacidad: number,
        escopeta_calibre: number,
        escopeta_nombre: string,
        escopeta_pais_origen: string,
        escopeta_serial: number,
        escopeta_clase_id: number) {

        this.escopeta_capacidad = escopeta_capacidad
        this.escopeta_calibre = escopeta_calibre
        this.escopeta_nombre = escopeta_nombre
        this.escopeta_pais_origen = escopeta_pais_origen
        this.escopeta_serial = escopeta_serial
        this.escopeta_clase_id = escopeta_clase_id
    }

}