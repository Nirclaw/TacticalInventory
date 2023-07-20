import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";

const appInventario = Router();
let con = undefined;

appInventario.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});


appTrainers.get("/", (req, res) => {
    con.query(/*sql*/ `SELECT * FROM trainers`, (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    });
  });

appInventario.post("/create", (req, res) => {
  con.query(/*sql*/ `INSERT INTO trainers SET ? `, req.body, (err, data) => {
    if (err) {
      console.log(req.body);
      res.send(err);
    } else res.send("creado con exito");
  });
});
