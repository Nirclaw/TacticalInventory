import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { createCuchillo } from "../../controller/dtoCuchillos.js";
import { jwtVerify } from "jose";
import { PASSWORD } from "../../config/config.js";
const proxycreateCuchillo = express();

proxycreateCuchillo.use(async(req, res, next) => {
  const encoder = new TextEncoder();
  const jwtData = await jwtVerify(req.body, encoder.encode(PASSWORD));
  let comprar = {
    peso: null,
    longitud:null,
    pais_origen:null,
    nombre:null,
    id_clase:null,
    serial:null
  };
  let { iat, exp, ...coppia } = jwtData.payload;
  if (
    JSON.stringify(Object.keys(comprar)) === JSON.stringify(Object.keys(coppia))
  ) {
    try {
      req.body = coppia;
      let data = plainToClass(createCuchillo, req.body, {
        exposeDefaultValues: true,
      });

      req.body = data;
      next();
    } catch (error) {
      res.status(400).send(error);
    }
  } else res.status(400).send("error en las llaves");
});



export default proxycreateCuchillo