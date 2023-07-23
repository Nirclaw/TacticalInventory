import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { buscarGranadaSerial } from "../../controller/dtoGranadas.js";
const proxybuscarGranadaSerial = express();

proxybuscarGranadaSerial.use((req, res, next) => {
  try {
    let data = plainToClass(buscarGranadaSerial, req.body.serial, {
      exposeDefaultValues: true,
    });

    req.body.serial = JSON.parse(JSON.stringify(data));
    next();
  } catch (error) {
    res.status(error.status).send(error);
  }
});

export default proxybuscarGranadaSerial;
