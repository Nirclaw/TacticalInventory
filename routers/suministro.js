import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";


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

appSuministro.get("/id/:suministro_id", (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM suministro WHERE suministro_id = ?`,
    req.params.suministro_id,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//crea un suministro

appSuministro.post("/create", (req, res) => {
  con.query(/*sql*/ `INSERT INTO suministro SET ? `, req.body, (err, data) => {
    if (err) {
      console.log(req.body);
      res.send(err);
    } else res.send("creado con exito");
  });
});

//borra un suministro en especifico con el id

appSuministro.delete("/delete", (req, res) => {
  con.query(
    /*sql*/ `DELETE FROM suministro WHERE suministro_id = ?`,
    req.body.suministro_id,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

//actualioza un suministro en especifico

appSuministro.put("/update", (req, res) => {
  con.query(
    /*sql*/ `UPDATE suministro SET ? WHERE suministro_id = ?`,
    [req.body, req.body.suministro_id],
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

export default appSuministro;
