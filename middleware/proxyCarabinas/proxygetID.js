import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import {buscarCarabinaId} from "../../controller/dtoCarabinas.js"
const proxybuscarSuministroId = express();

proxybuscarSuministroId.use((req, res, next) => {
  try {
    let data = plainToClass(buscarCarabinaId, req.body, {
      exposeDefaultValues: true,
    });

    req.body.serial = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {}
});



export default proxybuscarSuministroId