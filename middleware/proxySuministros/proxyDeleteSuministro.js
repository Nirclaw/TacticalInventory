import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { deleteSuministroId } from "../../controller/dtoSuministro.js";

const proxybuscarSuministroId = express();

proxybuscarSuministroId.use((req, res, next) => {
  try {
    let data = plainToClass(deleteSuministroId, req.body.suministro_id, {
      exposeDefaultValues: true,
    });

    req.body.suministro_id = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {}
});



export default proxybuscarSuministroId