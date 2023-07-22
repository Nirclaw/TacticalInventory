import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { buscarSuministroId } from "../../controller/dtoSuministro.js";

const proxybuscarSuministroId = express();

proxybuscarSuministroId.use((req, res, next) => {
  try {
    let data = plainToClass(buscarSuministroId, req.body, {
      exposeDefaultValues: true,
    });
    req.body.id_suministro = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {

    res.status(400).send(error)
  }
});



export default proxybuscarSuministroId