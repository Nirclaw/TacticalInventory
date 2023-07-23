import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import proxybuscarPistoSemiAutoSerial from "../middleware/proxyPistolaSemiAuto/proxyGetSerial.js";
import proxycreatPistoSemiAuto from "../middleware/proxyPistolaSemiAuto/poxyCreatepistoSemiAuto.js";
import aappEncriptar from "./validarEstructura.js";

const appPistolasSemiAuto = Router();
let con = undefined;

appPistolasSemiAuto.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los suministros de la tabla
appPistolasSemiAuto.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM pistolas_semiautomaticas`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

//trae informacion de un escopetas en especifico con el fusil_asalto_serial

appPistolasSemiAuto.get("/id",aappEncriptar,proxybuscarPistoSemiAutoSerial, (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM pistolas_semiautomaticas WHERE pistola_semiauto_serial = ?`,
    req.body.serial,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un escopetas

appPistolasSemiAuto.post("/create",aappEncriptar,proxycreatPistoSemiAuto, (req, res) => {
  con.query(/*sql*/ `INSERT INTO pistolas_semiautomaticas SET ? `,
   req.body, 
   (err, data) => {
    if (err) {

      res.send(err);
    } else res.send("creado con exito");
  });
});



export default appPistolasSemiAuto;
