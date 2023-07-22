import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { creatFusil } from "../../controller/dtoFusil_asalto.js";
const proxycreatFusil = express();

proxycreatFusil.use((req, res, next) => {
  try {
    let data = plainToClass(creatFusil, req.body, {
      exposeDefaultValues: true,
    });

    req.body = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {
    res.status(error.status).send(error);
  }
});



export default proxycreatFusil