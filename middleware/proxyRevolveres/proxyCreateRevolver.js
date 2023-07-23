import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { createRevolveres } from "../../controller/dtoRevolveres.js";
const proxycreateRevolveres = express();

proxycreateRevolveres.use((req, res, next) => {
  try {
    let data = plainToClass(createRevolveres, req.body, {
      exposeDefaultValues: true,
    });

    req.body = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {
    res.status(error.status).send(error);
  }
});



export default proxycreateRevolveres