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
export class buscarRevolveresSerial {
    constructor(revolver_serial) {
        this.revolver_serial = revolver_serial;
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
], buscarRevolveresSerial.prototype, "revolver_serial", void 0);
export class createRevolveres {
    constructor(revolver_capacidad, revolver_calibre, revolver_nombre, revolver_pais_origen, revolver_serial, revolver_clase_id) {
        this.revolver_capacidad = revolver_capacidad;
        this.revolver_calibre = revolver_calibre;
        this.revolver_nombre = revolver_nombre;
        this.revolver_pais_origen = revolver_pais_origen;
        this.revolver_serial = revolver_serial;
        this.revolver_clase_id = revolver_clase_id;
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
], createRevolveres.prototype, "revolver_capacidad", void 0);
__decorate([
    Expose({ name: "calibre" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], createRevolveres.prototype, "revolver_calibre", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createRevolveres.prototype, "revolver_nombre", void 0);
__decorate([
    Expose({ name: "pais_origen" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], createRevolveres.prototype, "revolver_pais_origen", void 0);
__decorate([
    Expose({ name: "serial" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], createRevolveres.prototype, "revolver_serial", void 0);
__decorate([
    Expose({ name: "clase_id" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], createRevolveres.prototype, "revolver_clase_id", void 0);
