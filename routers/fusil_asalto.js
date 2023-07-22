import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";

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

appFusilAsalto.get("/id", (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM fusiles_asalto WHERE fusil_asalto_serial = ?`,
    req.body.fusil_asalto_serial,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un fusiles_asalto

appFusilAsalto.post("/create", (req, res) => {
  con.query(/*sql*/ `INSERT INTO fusiles_asalto SET ? `, req.body, (err, data) => {
    if (err) {
      console.log(req.body);
      res.send(err);
    } else res.send("creado con exito");
  });
});



export default appFusilAsalto;
