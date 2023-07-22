import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { buscarFusilSerial } from "../../controller/dtoFusil_asalto.js";
const proxybuscarFusilSerial = express();

proxybuscarFusilSerial.use((req, res, next) => {
  try {
    let data = plainToClass(buscarFusilSerial, req.body.serial, {
      exposeDefaultValues: true,
    });

    req.body.serial = JSON.parse(JSON.stringify(data));
    next();
  } catch (error) {
    res.status(error.status).send(error);
  }
});

export default proxybuscarFusilSerial;
