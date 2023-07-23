import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import proxybuscarFusilPresicionSerial from "../middleware/proxyFusilPresicion.js/proxyGetSerial.js";
import proxyFusilPresicion from "../middleware/proxyFusilPresicion.js/proxyCreatefusilPresicion.js";
import aappEncriptar from "./validarEstructura.js";

const appFusilPresicion = Router();
let con = undefined;

appFusilPresicion.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los suministros de la tabla
appFusilPresicion.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM fusiles_precision`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

//trae informacion de un escopetas en especifico con el fusil_asalto_serial

appFusilPresicion.get("/id",aappEncriptar, proxybuscarFusilPresicionSerial, (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM fusiles_precision WHERE fusil_precision_serial = ?`,
    req.body.serial,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un escopetas

appFusilPresicion.post("/create",aappEncriptar,proxyFusilPresicion, (req, res) => {
  con.query(
    /*sql*/ `INSERT INTO fusiles_precision SET ? `,
    req.body,
    (err, data) => {
      if (err) {
        console.log(req.body);
        res.send(err);
      } else res.send("creado con exito");
    }
  );
});

export default appFusilPresicion;
