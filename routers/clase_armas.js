import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import proxybuscarClaseId from "../middleware/proxyclaseArmas/proxyGetId.js";
import proxycreateClase from "../middleware/proxyclaseArmas/proxyCreateClase.js";
import aappEncriptar from "./validarEstructura.js";

const appClaseArmas = Router();
let con = undefined;

appClaseArmas.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los clases_armas de la tabla
appClaseArmas.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM clases_armas`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

//trae informacion de un clases_armas en especifico con el id

appClaseArmas.get("/id",aappEncriptar, proxybuscarClaseId, (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM clases_armas WHERE clase_id = ?`,
    req.body.id_clase,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un clases_armas

appClaseArmas.post("/create", aappEncriptar, proxycreateClase, (req, res) => {
  con.query(
    /*sql*/ `INSERT INTO clases_armas SET ? `,
    req.body,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send("creado con exito");
    }
  );
});

export default appClaseArmas;
