import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { updateSuministro } from "../../controller/dtoSuministro.js";

const proxyUpdateSuministro = express();

proxyUpdateSuministro.use((req, res, next) => {
  try {
    let data = plainToClass(updateSuministro, req.body, {
      excludeExtraneousValues: true,
    });

    req.body = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {
    res.status(400).send(error)
  }
});



export default proxyUpdateSuministro