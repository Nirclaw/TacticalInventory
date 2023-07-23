import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { createGranda } from "../../controller/dtoGranadas.js";
const proxycreateGranda = express();

proxycreateGranda.use((req, res, next) => {
  try {
    let data = plainToClass(createGranda, req.body, {
      exposeDefaultValues: true,
    });

    req.body = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {
    res.status(error.status).send(error);
  }
});



export default proxycreateGranda