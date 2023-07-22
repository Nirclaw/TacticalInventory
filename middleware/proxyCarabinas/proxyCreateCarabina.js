import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import {createCarabina} from "../../controller/dtoCarabinas.js"
const proxycreateCarabina = express();

proxycreateCarabina.use((req, res, next) => {
  try {
    let data = plainToClass(createCarabina, req.body, {
      exposeDefaultValues: true,
    });

    req.body = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {}
});



export default proxycreateCarabina