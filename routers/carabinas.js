import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import proxybuscarSuministroId from "../middleware/proxyCarabinas/proxygetID.js";
import proxycreateCarabina from "../middleware/proxyCarabinas/proxyCreateCarabina.js";

const appCarabinas = Router();
let con = undefined;

appCarabinas.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los carabinas de la tabla
appCarabinas.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM carabinas`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

//trae informacion de un carabinas en especifico con el fusil_asalto_serial

appCarabinas.get("/id",proxybuscarSuministroId, (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM carabinas WHERE carabina_serial = ?`,
    req.body.serial,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un carabinas

appCarabinas.post("/create",proxycreateCarabina,(req, res) => {
  con.query(/*sql*/ `INSERT INTO carabinas SET ? `, req.body, (err, data) => {
    if (err) {
      console.log(req.body);
      res.send(err);
    } else res.send("creado con exito");
  });
});



export default appCarabinas;
