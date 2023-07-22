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
export class buscarSuministroId {
    constructor(ID) {
        this.suministro_id = ID;
    }
}
__decorate([
    Expose({ name: "id_suministro" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], buscarSuministroId.prototype, "suministro_id", void 0);
export class deleteSuministroId {
    constructor(ID) {
        this.suministro_id = ID;
    }
}
__decorate([
    Expose({ name: "id_suministro" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], deleteSuministroId.prototype, "suministro_id", void 0);
export class crearSuministro {
    constructor(id_arma_pistola_semiauto, id_cuchillo_combate, id_fusil_presicion, id_carabina, id_granada, id_escopeta, id_revolver, id_fusil_asalto, nombre_completo, rango, edad) {
        this.suministro_id_arma_pistola_semiauto = id_arma_pistola_semiauto;
        this.suministro_id_cuchillo_combate = id_cuchillo_combate;
        this.suministro_id_fusil_presicion = id_fusil_presicion;
        this.suministro_id_carabina = id_carabina;
        this.suministro_id_granada = id_granada;
        this.suministro_id_escopeta = id_escopeta;
        this.suministro_id_revolver = id_revolver;
        this.suministro_id_fusil_asalto = id_fusil_asalto;
        this.suministro_nombre_completo = nombre_completo;
        this.suministro_rango = rango;
        this.suministro_edad = edad;
    }
}
__decorate([
    Expose({ name: "id_pistola_semiauto" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], crearSuministro.prototype, "suministro_id_arma_pistola_semiauto", void 0);
__decorate([
    Expose({ name: "id_cuchillo_combate" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], crearSuministro.prototype, "suministro_id_cuchillo_combate", void 0);
__decorate([
    Expose({ name: "id_fusil_presicion" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], crearSuministro.prototype, "suministro_id_fusil_presicion", void 0);
__decorate([
    Expose({ name: "id_carabina" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], crearSuministro.prototype, "suministro_id_carabina", void 0);
__decorate([
    Expose({ name: "id_granada" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], crearSuministro.prototype, "suministro_id_granada", void 0);
__decorate([
    Expose({ name: "id_escopeta" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], crearSuministro.prototype, "suministro_id_escopeta", void 0);
__decorate([
    Expose({ name: "id_revolver" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], crearSuministro.prototype, "suministro_id_revolver", void 0);
__decorate([
    Expose({ name: "id_fusil_asalto" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], crearSuministro.prototype, "suministro_id_fusil_asalto", void 0);
__decorate([
    Expose({ name: "nombre_completo" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], crearSuministro.prototype, "suministro_nombre_completo", void 0);
__decorate([
    Expose({ name: "rango" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], crearSuministro.prototype, "suministro_rango", void 0);
__decorate([
    Expose({ name: "edad" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], crearSuministro.prototype, "suministro_edad", void 0);
export class updateSuministro {
    constructor(id_arma_pistola_semiauto, id_cuchillo_combate, id_fusil_presicion, id_carabina, id_granada, id_escopeta, id_revolver, id_fusil_asalto, nombre_completo, rango, edad, id_suministro) {
        this.suministro_id_arma_pistola_semiauto = id_arma_pistola_semiauto;
        this.suministro_id_cuchillo_combate = id_cuchillo_combate;
        this.suministro_id_fusil_presicion = id_fusil_presicion;
        this.suministro_id_carabina = id_carabina;
        this.suministro_id_granada = id_granada;
        this.suministro_id_escopeta = id_escopeta;
        this.suministro_id_revolver = id_revolver;
        this.suministro_id_fusil_asalto = id_fusil_asalto;
        this.suministro_nombre_completo = nombre_completo;
        this.suministro_rango = rango;
        this.suministro_edad = edad;
        this.suministro_id = id_suministro;
    }
}
__decorate([
    Expose({ name: "id_suministro" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateSuministro.prototype, "suministro_id", void 0);
__decorate([
    Expose({ name: "id_pistola_semiauto" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateSuministro.prototype, "suministro_id_arma_pistola_semiauto", void 0);
__decorate([
    Expose({ name: "id_cuchillo_combate" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateSuministro.prototype, "suministro_id_cuchillo_combate", void 0);
__decorate([
    Expose({ name: "id_fusil_presicion" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateSuministro.prototype, "suministro_id_fusil_presicion", void 0);
__decorate([
    Expose({ name: "id_carabina" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateSuministro.prototype, "suministro_id_carabina", void 0);
__decorate([
    Expose({ name: "id_granada" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateSuministro.prototype, "suministro_id_granada", void 0);
__decorate([
    Expose({ name: "id_escopeta" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateSuministro.prototype, "suministro_id_escopeta", void 0);
__decorate([
    Expose({ name: "id_revolver" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateSuministro.prototype, "suministro_id_revolver", void 0);
__decorate([
    Expose({ name: "id_fusil_asalto" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateSuministro.prototype, "suministro_id_fusil_asalto", void 0);
__decorate([
    Expose({ name: "nombre_completo" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], updateSuministro.prototype, "suministro_nombre_completo", void 0);
__decorate([
    Expose({ name: "rango" }),
    Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], updateSuministro.prototype, "suministro_rango", void 0);
__decorate([
    Expose({ name: "edad" }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: "Error en los parametros" };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], updateSuministro.prototype, "suministro_edad", void 0);
