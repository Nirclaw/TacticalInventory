import { Expose, Transform } from "class-transformer";

export class buscarFusilSerial {
    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    fusil_asalto_serial: number;

    constructor(fusil_asalto_serial: number) {
        this.fusil_asalto_serial = fusil_asalto_serial
    }

}

export class creatFusil {
    @Expose({ name: "capacidad_cargador" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    fusil_asalto_capacidad: number

    @Expose({ name: "calibre" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    fusil_asalto_calibre: number

    @Expose({ name: "nombre" })
    @Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    fusil_asalto_nombre: string

    @Expose({ name: "pais_origen" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    fusil_asalto_pais_origen: string

    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    fusil_asalto_serial: number

    @Expose({ name: "clase_arma" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    fusil_asalto_clase_id: number

    constructor(fusil_asalto_capacidad: number,
        fusil_asalto_calibre: number,
        fusil_asalto_nombre: string,
        fusil_asalto_pais_origen: string,
        fusil_asalto_serial: number,
        fusil_asalto_clase_id: number) {

        this.fusil_asalto_capacidad = fusil_asalto_capacidad
        this.fusil_asalto_calibre = fusil_asalto_calibre
        this.fusil_asalto_nombre = fusil_asalto_nombre
        this.fusil_asalto_pais_origen = fusil_asalto_pais_origen
        this.fusil_asalto_serial = fusil_asalto_serial
        this.fusil_asalto_clase_id = fusil_asalto_clase_id
    }

}