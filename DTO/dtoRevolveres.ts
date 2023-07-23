import { Expose, Transform } from "class-transformer";

export class buscarRevolveresSerial {
    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    revolver_serial: number;

    constructor(revolver_serial: number) {
        this.revolver_serial = revolver_serial
    }

}

export class createRevolveres {
    @Expose({ name: "capacidad_cargador" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    revolver_capacidad: number

    @Expose({ name: "calibre" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    revolver_calibre: number

    @Expose({ name: "nombre" })
    @Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    revolver_nombre: string

    @Expose({ name: "pais_origen" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    revolver_pais_origen: string

    @Expose({ name: "serial" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    revolver_serial: number

    @Expose({ name: "clase_arma" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    revolver_clase_id: number

    constructor(revolver_capacidad: number,
        revolver_calibre: number,
        revolver_nombre: string,
        revolver_pais_origen: string,
        revolver_serial: number,
        revolver_clase_id: number) {

        this.revolver_capacidad = revolver_capacidad
        this.revolver_calibre = revolver_calibre
        this.revolver_nombre = revolver_nombre
        this.revolver_pais_origen = revolver_pais_origen
        this.revolver_serial = revolver_serial
        this.revolver_clase_id = revolver_clase_id
    }

}