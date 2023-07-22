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
export class buscarFusilSerial {
    constructor(fusil_asalto_serial) {
        this.fusil_asalto_serial = fusil_asalto_serial;
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
], buscarFusilSerial.prototype, "fusil_asalto_serial", void 0);
export class creatFusil {
    constructor(fusil_asalto_capacidad, fusil_asalto_calibre, fusil_asalto_nombre, fusil_asalto_pais_origen, fusil_asalto_serial, fusil_asalto_clase_id) {
        this.fusil_asalto_capacidad = fusil_asalto_capacidad;
        this.fusil_asalto_calibre = fusil_asalto_calibre;
        this.fusil_asalto_nombre = fusil_asalto_nombre;
        this.fusil_asalto_pais_origen = fusil_asalto_pais_origen;
        this.fusil_asalto_serial = fusil_asalto_serial;
        this.fusil_asalto_clase_id = fusil_asalto_clase_id;
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
], creatFusil.prototype, "fusil_asalto_capacidad", void 0);
__decorate([
    Expose({ name: "calibre" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], creatFusil.prototype, "fusil_asalto_calibre", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        if (/^[0-9a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], creatFusil.prototype, "fusil_asalto_nombre", void 0);
__decorate([
    Expose({ name: "pais_origen" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], creatFusil.prototype, "fusil_asalto_pais_origen", void 0);
__decorate([
    Expose({ name: "serial" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], creatFusil.prototype, "fusil_asalto_serial", void 0);
__decorate([
    Expose({ name: "clase_arma" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], creatFusil.prototype, "fusil_asalto_clase_id", void 0);
