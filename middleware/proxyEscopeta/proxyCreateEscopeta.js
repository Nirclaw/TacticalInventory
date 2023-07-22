import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { creatEscopeta } from "../../controller/dtoEscopetas.js";
const proxycreatEscopeta = express();

proxycreatEscopeta.use((req, res, next) => {
  try {
    let data = plainToClass(creatEscopeta, req.body, {
      exposeDefaultValues: true,
    });

    req.body = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {
    res.status(error.status).send(error);
  }
});



export default proxycreatEscopeta