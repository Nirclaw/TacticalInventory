import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { crearSuministro } from "../../controller/dtoSuministro.js";

const proxyCrearSuministro = express();

proxyCrearSuministro.use((req, res, next) => {
  try {
    let data = plainToClass(crearSuministro, req.body, {
      exposeDefaultValues: true,
    });

    req.body = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {
    res.status(400).send(error)
  }
});



export default proxyCrearSuministro