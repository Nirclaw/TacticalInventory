import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { createCuchillo } from "../../controller/dtoCuchillos.js";
const proxycreateCuchillo = express();

proxycreateCuchillo.use((req, res, next) => {
  try {
    let data = plainToClass(createCuchillo, req.body, {
      exposeDefaultValues: true,
    });

    req.body = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {
    res.status(error.status).send(error);
  }
});



export default proxycreateCuchillo