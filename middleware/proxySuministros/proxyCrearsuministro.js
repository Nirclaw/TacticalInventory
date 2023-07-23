import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { crearSuministro } from "../../controller/dtoSuministro.js";
import { jwtVerify } from "jose";
import { PASSWORD } from "../../config/config.js";

const proxyCrearSuministro = express();

proxyCrearSuministro.use(async (req, res, next) => {
  const encoder = new TextEncoder();
  const jwtData = await jwtVerify(req.body, encoder.encode(PASSWORD));
  let comprar = {
    id_pistola_semiauto: null,
    id_cuchillo_combate: null,
    id_fusil_presicion: null,
    id_carabina: null,
    id_granada: null,
    id_escopeta: null,
    id_revolver: null,
    id_fusil_asalto: null,
    nombre_completo: null,
    rango: null,
    edad: null,
  };

  let { iat, exp, ...coppia } = jwtData.payload;

  if (
    JSON.stringify(Object.keys(comprar)) === JSON.stringify(Object.keys(coppia))
  ) {
    try {
      req.body = coppia;
      let data = plainToClass(crearSuministro, req.body, {
        exposeDefaultValues: true,
      });
      req.body = data;
      next();
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    res.status(400).send("error en las llaves");
  }
});

export default proxyCrearSuministro;
