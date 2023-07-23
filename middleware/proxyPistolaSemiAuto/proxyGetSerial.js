import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { buscarPistoSemiAutoSerial } from "../../controller/dtoPistolaSemiAuto.js";
const proxybuscarPistoSemiAutoSerial = express();

proxybuscarPistoSemiAutoSerial.use((req, res, next) => {
  try {
    let data = plainToClass(buscarPistoSemiAutoSerial, req.body.serial, {
      exposeDefaultValues: true,
    });

    req.body.serial = JSON.parse(JSON.stringify(data));
    next();
  } catch (error) {
    res.status(error.status).send(error);
  }
});

export default proxybuscarPistoSemiAutoSerial;
