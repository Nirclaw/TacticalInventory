import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { buscarEscopSerial } from "../../controller/dtoEscopetas.js";
const proxybuscarEscopSerial = express();

proxybuscarEscopSerial.use((req, res, next) => {
  try {
    let data = plainToClass(buscarEscopSerial, req.body.serial, {
      exposeDefaultValues: true,
    });

    req.body.serial = JSON.parse(JSON.stringify(data));
    next();
  } catch (error) {
    res.status(error.status).send(error);
  }
});

export default proxybuscarEscopSerial;
