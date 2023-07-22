import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";

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

appFusilPresicion.get("/id", (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM fusiles_precision WHERE fusil_precision_serial = ?`,
    req.body.fusil_precision_serial,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un escopetas

appFusilPresicion.post("/create", (req, res) => {
  con.query(/*sql*/ `INSERT INTO fusiles_precision SET ? `, req.body, (err, data) => {
    if (err) {
      console.log(req.body);
      res.send(err);
    } else res.send("creado con exito");
  });
});



export default appFusilPresicion;
