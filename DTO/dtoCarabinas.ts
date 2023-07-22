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