import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { creatFusilPresicion } from "../../controller/dtoFusil_Presicion.js";
const proxyFusilPresicion = express();

proxyFusilPresicion.use((req, res, next) => {
  try {
    let data = plainToClass(creatFusilPresicion, req.body, {
      exposeDefaultValues: true,
    });

    req.body = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {
    res.status(error.status).send(error);
  }
});



export default proxyFusilPresicion