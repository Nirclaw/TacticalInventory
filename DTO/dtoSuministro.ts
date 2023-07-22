import { Expose, Transform } from "class-transformer";

export class buscarSuministroId {
    @Expose({ name: "id_suministro" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id: number;

    constructor(ID: number) {
        this.suministro_id = ID
    }

}
export class deleteSuministroId {
    @Expose({ name: "id_suministro" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id: number;

    constructor(ID: number) {
        this.suministro_id = ID
    }

}

export class crearSuministro {
    @Expose({ name: "id_pistola_semiauto" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_arma_pistola_semiauto: number;

    @Expose({ name: "id_cuchillo_combate" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_cuchillo_combate: number;

    @Expose({ name: "id_fusil_presicion" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_fusil_presicion: number;

    @Expose({ name: "id_carabina" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_carabina: number

    @Expose({ name: "id_granada" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_granada: number

    @Expose({ name: "id_escopeta" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_escopeta: number

    @Expose({ name: "id_revolver" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_revolver: number

    @Expose({ name: "id_fusil_asalto" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_fusil_asalto: number

    @Expose({ name: "nombre_completo" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    suministro_nombre_completo: String

    @Expose({ name: "rango" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    suministro_rango: String

    @Expose({ name: "edad" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_edad: number
    constructor(id_arma_pistola_semiauto: number,
        id_cuchillo_combate: number,
        id_fusil_presicion: number,
        id_carabina: number,
        id_granada: number,
        id_escopeta: number,
        id_revolver: number,
        id_fusil_asalto: number,
        nombre_completo: String,
        rango: String,
        edad: number) {
        this.suministro_id_arma_pistola_semiauto = id_arma_pistola_semiauto
        this.suministro_id_cuchillo_combate = id_cuchillo_combate
        this.suministro_id_fusil_presicion = id_fusil_presicion
        this.suministro_id_carabina = id_carabina
        this.suministro_id_granada = id_granada
        this.suministro_id_escopeta = id_escopeta
        this.suministro_id_revolver = id_revolver
        this.suministro_id_fusil_asalto = id_fusil_asalto
        this.suministro_nombre_completo = nombre_completo
        this.suministro_rango = rango
        this.suministro_edad = edad


    }
}

export class updateSuministro {
    @Expose({ name: "id_suministro" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id: number;

    @Expose({ name: "id_pistola_semiauto" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_arma_pistola_semiauto: number;

    @Expose({ name: "id_cuchillo_combate" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_cuchillo_combate: number;

    @Expose({ name: "id_fusil_presicion" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_fusil_presicion: number;

    @Expose({ name: "id_carabina" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_carabina: number

    @Expose({ name: "id_granada" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_granada: number

    @Expose({ name: "id_escopeta" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_escopeta: number

    @Expose({ name: "id_revolver" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_revolver: number

    @Expose({ name: "id_fusil_asalto" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_id_fusil_asalto: number

    @Expose({ name: "nombre_completo" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    suministro_nombre_completo: String

    @Expose({ name: "rango" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    suministro_rango: String

    @Expose({ name: "edad" })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true })
    suministro_edad: number
    constructor(id_arma_pistola_semiauto: number,
        id_cuchillo_combate: number,
        id_fusil_presicion: number,
        id_carabina: number,
        id_granada: number,
        id_escopeta: number,
        id_revolver: number,
        id_fusil_asalto: number,
        nombre_completo: String,
        rango: String,
        edad: number,
        id_suministro: number) {
        this.suministro_id_arma_pistola_semiauto = id_arma_pistola_semiauto
        this.suministro_id_cuchillo_combate = id_cuchillo_combate
        this.suministro_id_fusil_presicion = id_fusil_presicion
        this.suministro_id_carabina = id_carabina
        this.suministro_id_granada = id_granada
        this.suministro_id_escopeta = id_escopeta
        this.suministro_id_revolver = id_revolver
        this.suministro_id_fusil_asalto = id_fusil_asalto
        this.suministro_nombre_completo = nombre_completo
        this.suministro_rango = rango
        this.suministro_edad = edad
        this.suministro_id = id_suministro


    }
}