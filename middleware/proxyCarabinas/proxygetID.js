import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { buscarCarabinaId } from "../../controller/dtoCarabinas.js";
import { jwtVerify } from "jose";
import { PASSWORD } from "../../config/config.js";
const proxybuscarCarabinaId = express();

proxybuscarCarabinaId.use(async (req, res, next) => {
  const encoder = new TextEncoder();
  const jwtData = await jwtVerify(req.body, encoder.encode(PASSWORD));
  let comprar = {
    serial: null,
  };
  let { iat, exp, ...coppia } = jwtData.payload;
  if (
    JSON.stringify(Object.keys(comprar)) === JSON.stringify(Object.keys(coppia))
  ) {
    try {
      req.body = coppia;
      let data = plainToClass(buscarCarabinaId, req.body.serial, {
        exposeDefaultValues: true,
      });

      req.body.serial = data;
      next();
    } catch (error) {
      res.status(400).send(error);
    }
  } else res.status(400).send("error en las llaves");
});

export default proxybuscarCarabinaId;
