import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { deleteSuministroId } from "../../controller/dtoSuministro.js";

const proxybuscarSuministroId = express();

proxybuscarSuministroId.use(async (req, res, next) => {
  const encoder = new TextEncoder();
  const jwtData = await jwtVerify(req.body, encoder.encode(PASSWORD));
  let comprar = {
    id_suministro: null
  };
  let { iat, exp, ...coppia } = jwtData.payload;
  if (
    JSON.stringify(Object.keys(comprar)) === JSON.stringify(Object.keys(coppia))
  ) {
    try {
      req.body = coppia;
      let data = plainToClass(deleteSuministroId, req.body.id_suministro, {
        exposeDefaultValues: true,
      });

      req.body.id_suministro = data;
      next();
    } catch (error) {
      res.status(400).send(error);
    }
  } else res.status(400).send("error en las llaves");
});

export default proxybuscarSuministroId;
