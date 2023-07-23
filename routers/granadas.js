import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import proxybuscarGranadaSerial from "../middleware/proxyGranadaSErial/prxyGetId.js";
import proxycreateGranda from "../middleware/proxyGranadaSErial/prxyCreateGrandas.js";

const appGranadas = Router();
let con = undefined;

appGranadas.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los granadas de la tabla
appGranadas.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM granadas`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

//trae informacion de un granadas en especifico con el fusil_asalto_serial

appGranadas.get("/id", proxybuscarGranadaSerial, (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM granadas WHERE granada_serial = ?`,
    req.body.serial,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un granadas

appGranadas.post("/create", proxycreateGranda, (req, res) => {
  con.query(
    /*sql*/ `INSERT INTO granadas SET ? `,
   req.body, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send("creado con exito");
  });
});

export default appGranadas;
