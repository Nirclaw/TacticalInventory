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
export class buscarGranadaSerial {
    constructor(ID) {
        this.granada_serial = ID;
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
], buscarGranadaSerial.prototype, "granada_serial", void 0);
export class createGranda {
    constructor(granada_peso, granada_destruivo, granada_pais_origen, granada_nombre, granada_clase_id, granada_serial) {
        this.granada_peso = granada_peso;
        this.granada_destruivo = granada_destruivo;
        this.granada_pais_origen = granada_pais_origen;
        this.granada_nombre = granada_nombre;
        this.granada_clase_id = granada_clase_id;
        this.granada_serial = granada_serial;
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
], createGranda.prototype, "granada_peso", void 0);
__decorate([
    Expose({ name: "descruvtivo" }),
    Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createGranda.prototype, "granada_destruivo", void 0);
__decorate([
    Expose({ name: "pais_origen" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createGranda.prototype, "granada_pais_origen", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createGranda.prototype, "granada_nombre", void 0);
__decorate([
    Expose({ name: "clase_id" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], createGranda.prototype, "granada_clase_id", void 0);
__decorate([
    Expose({ name: "serial" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], createGranda.prototype, "granada_serial", void 0);
