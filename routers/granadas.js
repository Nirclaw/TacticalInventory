import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";

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

appGranadas.get("/id", (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM granadas WHERE granada_serial = ?`,
    req.body.granada_serial,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un granadas

appGranadas.post("/create", (req, res) => {
  con.query(/*sql*/ `INSERT INTO granadas SET ? `, req.body, (err, data) => {
    if (err) {
      console.log(req.body);
      res.send(err);
    } else res.send("creado con exito");
  });
});



export default appGranadas;
