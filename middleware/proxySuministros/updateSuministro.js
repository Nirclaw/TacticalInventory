import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { updateSuministro } from "../../controller/dtoSuministro.js";

const proxyUpdateSuministro = express();

proxyUpdateSuministro.use((req, res, next) => {
  try {
    let data = plainToClass(updateSuministro, req.body, {
      exposeDefaultValues: true,
    });

    req.body = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {}
});



export default proxyUpdateSuministro