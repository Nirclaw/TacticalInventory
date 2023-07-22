import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { buscarClaseId } from "../../controller/dtoClase_armas.js";
const proxybuscarClaseId = express();

proxybuscarClaseId.use((req, res, next) => {
  try {
    let data = plainToClass(buscarClaseId, req.body, {
        excludeExtraneousValues: true,
    });
    
    req.body.id_clase = JSON.parse(JSON.stringify(data));
    next();
  } catch (error) {
    res.status(error.status).send(error);

  }
});

export default proxybuscarClaseId;
