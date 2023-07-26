import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import proxybuscarFusilSerial from "../middleware/proxyFusil_asalto/prxyGetId.js";
import proxycreatFusil from "../middleware/proxyFusil_asalto/proxyCreateFusilAsalto.js";
import aappEncriptar from "./validarEstructura.js";

const appFusilAsalto = Router();
let con = undefined;

appFusilAsalto.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los suministros de la tabla
appFusilAsalto.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM fusiles_asalto`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

//trae informacion de un fusiles_asalto en especifico con el fusil_asalto_serial

appFusilAsalto.get("/id",aappEncriptar, proxybuscarFusilSerial, (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM fusiles_asalto WHERE  fusil_asalto_id = ?`,
    req.body.serial,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un fusiles_asalto

appFusilAsalto.post("/create",aappEncriptar, proxycreatFusil, (req, res) => {
  con.query(
    /*sql*/ `INSERT INTO fusiles_asalto SET ? `,
    req.body,
    (err, data) => {
      if (err) {
        console.log(req.body);
        res.send(err);
      } else res.send("creado con exito");
    }
  );
});

export default appFusilAsalto;
