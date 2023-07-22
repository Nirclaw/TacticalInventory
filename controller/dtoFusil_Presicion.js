var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class buscarFusilPresicionSerial {
    constructor(fusil_precision_serial) {
        this.fusil_precision_serial = fusil_precision_serial;
    }
}
__decorate([
    Expose({ name: "serial" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], buscarFusilPresicionSerial.prototype, "fusil_precision_serial", void 0);
export class creatFusilPresicion {
    constructor(fusil_precision_capacidad, fusil_precision_calibre, fusil_precision_nombre, fusil_precision_pais_origen, fusil_precision_serial, fusil_precision_clase_id) {
        this.fusil_precision_capacidad = fusil_precision_capacidad;
        this.fusil_precision_calibre = fusil_precision_calibre;
        this.fusil_precision_nombre = fusil_precision_nombre;
        this.fusil_precision_pais_origen = fusil_precision_pais_origen;
        this.fusil_precision_serial = fusil_precision_serial;
        this.fusil_precision_clase_id = fusil_precision_clase_id;
    }
}
__decorate([
    Expose({ name: "capacidad_cargador" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], creatFusilPresicion.prototype, "fusil_precision_capacidad", void 0);
__decorate([
    Expose({ name: "calibre" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], creatFusilPresicion.prototype, "fusil_precision_calibre", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], creatFusilPresicion.prototype, "fusil_precision_nombre", void 0);
__decorate([
    Expose({ name: "pais_origen" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], creatFusilPresicion.prototype, "fusil_precision_pais_origen", void 0);
__decorate([
    Expose({ name: "serial" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], creatFusilPresicion.prototype, "fusil_precision_serial", void 0);
__decorate([
    Expose({ name: "clase_arma" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], creatFusilPresicion.prototype, "fusil_precision_clase_id", void 0);
