import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { creatPistoSemiAuto } from "../../controller/dtoPistolaSemiAuto.js";
const proxycreatPistoSemiAuto = express();

proxycreatPistoSemiAuto.use((req, res, next) => {
  try {
    let data = plainToClass(creatPistoSemiAuto, req.body, {
      exposeDefaultValues: true,
    });

    req.body = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {
    res.status(error.status).send(error);
  }
});



export default proxycreatPistoSemiAuto