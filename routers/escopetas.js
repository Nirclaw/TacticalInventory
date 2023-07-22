import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";

const appEscopetas = Router();
let con = undefined;

appEscopetas.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los suministros de la tabla
appEscopetas.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM escopetas`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

//trae informacion de un escopetas en especifico con el fusil_asalto_serial

appEscopetas.get("/id", (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM escopetas WHERE escopeta_serial = ?`,
    req.body.escopeta_serial,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un escopetas

appEscopetas.post("/create", (req, res) => {
  con.query(/*sql*/ `INSERT INTO escopetas SET ? `, req.body, (err, data) => {
    if (err) {
      console.log(req.body);
      res.send(err);
    } else res.send("creado con exito");
  });
});



export default appEscopetas;
