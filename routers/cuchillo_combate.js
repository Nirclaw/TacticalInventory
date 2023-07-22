import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import proxybuscarCuchilloSerial from "../middleware/proxyCuchillos.js/proxyBuscarSerial.js";
import proxycreateCuchillo from "../middleware/proxyCuchillos.js/proxyCreateCuchillo.js";

const appCuchilloCombate = Router();
let con = undefined;

appCuchilloCombate.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los cuchillo_combate de la tabla
appCuchilloCombate.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM cuchillo_combate`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

//trae informacion de un cuchillo_combate en especifico con el fusil_asalto_serial

appCuchilloCombate.get("/id",proxybuscarCuchilloSerial, (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM cuchillo_combate WHERE cuchillo_serial = ?`,
    req.body,
    (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else res.send(data);
    }
  );
});

//crea un cuchillo_combate

appCuchilloCombate.post("/create",proxycreateCuchillo, (req, res) => {
  con.query(/*sql*/ `INSERT INTO cuchillo_combate SET ? `, req.body, (err, data) => {
    if (err) {
      console.log(req.body);
      res.send(err);
    } else res.send("creado con exito");
  });
});



export default appCuchilloCombate;
