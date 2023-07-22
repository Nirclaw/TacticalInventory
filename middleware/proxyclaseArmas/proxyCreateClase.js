import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { createClase } from "../../controller/dtoClase_armas.js";
const proxycreateClase = express();

proxycreateClase.use((req, res, next) => {
  try {
    let data = plainToClass(createClase, req.body, {
        excludeExtraneousValues: true,
    });
    
    req.body = JSON.parse(JSON.stringify(data));
    next();
  } catch (error) {
    res.status(error.status).send(error);

  }
});

export default proxycreateClase;
