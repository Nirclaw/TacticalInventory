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
export class buscarCarabinaId {
    constructor(ID) {
        this.carabina_serial = ID;
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
], buscarCarabinaId.prototype, "carabina_serial", void 0);
export class createCarabina {
    constructor(carabina_capacidad, carabina_calibre, carabina_nombre, carabina_pais_origen, carabina_serial, carabina_clase_id) {
        this.carabina_capacidad = carabina_capacidad;
        this.carabina_calibre = carabina_calibre;
        this.carabina_nombre = carabina_nombre;
        this.carabina_pais_origen = carabina_pais_origen;
        this.carabina_serial = carabina_serial;
        this.carabina_clase_id = carabina_clase_id;
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
], createCarabina.prototype, "carabina_capacidad", void 0);
__decorate([
    Expose({ name: "calibre" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], createCarabina.prototype, "carabina_calibre", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createCarabina.prototype, "carabina_nombre", void 0);
__decorate([
    Expose({ name: "pais_origen" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createCarabina.prototype, "carabina_pais_origen", void 0);
__decorate([
    Expose({ name: "serial" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], createCarabina.prototype, "carabina_serial", void 0);
__decorate([
    Expose({ name: "clase_arma" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], createCarabina.prototype, "carabina_clase_id", void 0);
