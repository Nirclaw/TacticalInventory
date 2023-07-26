import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import proxybuscarRevolveresSerial from "../middleware/proxyRevolveres/prxyGetSerial.js";
import proxycreateRevolveres from "../middleware/proxyRevolveres/proxyCreateRevolver.js";
import aappEncriptar from "./validarEstructura.js";

const appRevolveres = Router();
let con = undefined;

appRevolveres.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los suministros de la tabla
appRevolveres.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM revolveres`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

//trae informacion de un escopetas en especifico con el fusil_asalto_serial

appRevolveres.get("/id",aappEncriptar,proxybuscarRevolveresSerial, (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM revolveres WHERE  revolver_id = ?`,
    req.body.serial,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un escopetas

appRevolveres.post("/create",aappEncriptar,proxycreateRevolveres, (req, res) => {
  con.query(/*sql*/ `INSERT INTO revolveres SET ? `, req.body, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send("creado con exito");
  });
});



export default appRevolveres;
