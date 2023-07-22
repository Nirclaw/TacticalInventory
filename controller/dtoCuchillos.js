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
export class buscarCuchilloSerial {
    constructor(cuchillo_serial) {
        this.cuchillo_serial = cuchillo_serial;
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
], buscarCuchilloSerial.prototype, "cuchillo_serial", void 0);
export class createCuchillo {
    constructor(cuchillo_peso, cuchillo_longitu, cuchillo_pais_origen, cuchillo_nombre, cuchillo_clase_id, cuchillo_serial) {
        this.cuchillo_peso = cuchillo_peso;
        this.cuchillo_longitu = cuchillo_longitu;
        this.cuchillo_pais_origen = cuchillo_pais_origen;
        this.cuchillo_nombre = cuchillo_nombre;
        this.cuchillo_clase_id = cuchillo_clase_id;
        this.cuchillo_serial = cuchillo_serial;
    }
}
__decorate([
    Expose({ name: "peso" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], createCuchillo.prototype, "cuchillo_peso", void 0);
__decorate([
    Expose({ name: "longitud" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], createCuchillo.prototype, "cuchillo_longitu", void 0);
__decorate([
    Expose({ name: "pais_origen" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createCuchillo.prototype, "cuchillo_pais_origen", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createCuchillo.prototype, "cuchillo_nombre", void 0);
__decorate([
    Expose({ name: "id_clase" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], createCuchillo.prototype, "cuchillo_clase_id", void 0);
__decorate([
    Expose({ name: "serial" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], createCuchillo.prototype, "cuchillo_serial", void 0);
