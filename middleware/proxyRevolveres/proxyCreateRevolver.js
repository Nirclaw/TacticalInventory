import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { createRevolveres } from "../../controller/dtoRevolveres.js";
import { jwtVerify } from "jose";
import { PASSWORD } from "../../config/config.js";
const proxycreateRevolveres = express();

proxycreateRevolveres.use(async(req, res, next) => {
  const encoder = new TextEncoder();
  const jwtData = await jwtVerify(req.body, encoder.encode(PASSWORD));
  let comprar = {
    capacidad_cargador: null,
    calibre: null,
    nombre: null,
    pais_origen: null,
    serial: null,
    clase_arma: null,
  };

  let { iat, exp, ...coppia } = jwtData.payload;

  if (
    JSON.stringify(Object.keys(comprar)) === JSON.stringify(Object.keys(coppia))
  ) {
    try {
      req.body = coppia;
      let data = plainToClass(createRevolveres, req.body, {
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



export default proxycreateRevolveres