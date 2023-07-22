import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { buscarFusilPresicionSerial } from "../../controller/dtoFusil_Presicion.js";
const proxybuscarFusilPresicionSerial = express();

proxybuscarFusilPresicionSerial.use((req, res, next) => {
  try {
    let data = plainToClass(buscarFusilPresicionSerial, req.body.serial, {
      exposeDefaultValues: true,
    });

    req.body.serial = JSON.parse(JSON.stringify(data));
    next();
  } catch (error) {
    res.status(error.status).send(error);
  }
});

export default proxybuscarFusilPresicionSerial;
