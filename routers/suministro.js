import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import proxybuscarSuministroId from "../middleware/proxySuministros/proxyBuscarID.js";
import proxyCrearSuministro from "../middleware/proxySuministros/proxyCrearsuministro.js";
import proxyUpdateSuministro from "../middleware/proxySuministros/updateSuministro.js";
import aappEncriptar from "./validarEstructura.js";


const appSuministro = Router();
let con = undefined;

appSuministro.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los suministros de la tabla
appSuministro.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM suministro`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

//trae informacion de un suministro en especifico con el id

appSuministro.get("/id",aappEncriptar,proxybuscarSuministroId ,(req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM suministro WHERE suministro_id = ?`,
    req.body.id_suministro,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un suministro

appSuministro.post("/create",aappEncriptar,proxyCrearSuministro ,(req, res) => {
  con.query(/*sql*/ `INSERT INTO suministro SET ? `, req.body, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send("creado con exito");
  });
});

//borra un suministro en especifico con el id

appSuministro.delete("/delete",aappEncriptar,proxybuscarSuministroId, (req, res) => {
  con.query(
    /*sql*/ `DELETE FROM suministro WHERE suministro_id = ?`,
    req.body.id_suministro,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send("eliminado con exito");
    }
  );
});

//actualioza un suministro en especifico

appSuministro.put("/update",aappEncriptar,proxyUpdateSuministro ,(req, res) => {
  con.query(
    /*sql*/ `UPDATE suministro SET ? WHERE suministro_id = ?`,
    [req.body, req.body.suministro_id],
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send("actualizado con exito");
    }
  );
});

export default appSuministro;
