import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { buscarClaseId } from "../../controller/dtoClase_armas.js";
import { jwtVerify } from "jose";
import { PASSWORD } from "../../config/config.js";
const proxybuscarClaseId = express();

proxybuscarClaseId.use(async (req, res, next) => {
  const encoder = new TextEncoder();
  const jwtData = await jwtVerify(req.body, encoder.encode(PASSWORD));
  let comprar = {
    id_clase: null,
  };
  let { iat, exp, ...coppia } = jwtData.payload;
  if (
    JSON.stringify(Object.keys(comprar)) === JSON.stringify(Object.keys(coppia))
  ) {
    try {
      req.body = coppia;
      let data = plainToClass(buscarClaseId, req.body, {
        exposeDefaultValues: true,
      });

      req.body.id_clase = data;
      next();
    } catch (error) {
      res.status(400).send(error);
    }
  } else res.status(400).send("error en las llaves");
});

export default proxybuscarClaseId;
