import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { buscarRevolveresSerial } from "../../controller/dtoRevolveres.js";
const proxybuscarRevolveresSerial = express();

proxybuscarRevolveresSerial.use((req, res, next) => {
  try {
    let data = plainToClass(buscarRevolveresSerial, req.body.serial, {
      exposeDefaultValues: true,
    });

    req.body.serial = JSON.parse(JSON.stringify(data));
    next();
  } catch (error) {
    res.status(error.status).send(error);
  }
});

export default proxybuscarRevolveresSerial;
