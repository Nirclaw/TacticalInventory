import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import proxybuscarEscopSerial from "../middleware/proxyEscopeta/proxyGetSerial.js";
import proxycreatEscopeta from "../middleware/proxyEscopeta/proxyCreateEscopeta.js";
import aappEncriptar from "./validarEstructura.js";

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

appEscopetas.get("/id",aappEncriptar,proxybuscarEscopSerial, (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM escopetas WHERE escopeta_serial = ?`,
    req.body.serial,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un escopetas

appEscopetas.post("/create",aappEncriptar,proxycreatEscopeta, (req, res) => {
  con.query(/*sql*/ `INSERT INTO escopetas SET ? `, req.body, (err, data) => {
    if (err) {
      console.log(req.body);
      res.send(err);
    } else res.send("creado con exito");
  });
});



export default appEscopetas;
