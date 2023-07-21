import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import appValiddarToken from "./validartoken.js";

const appSuministro = Router();
let con = undefined;

appSuministro.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});


appSuministro.get("/", (req, res) => {
    con.query(/*sql*/ `SELECT * FROM suministro`, (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    });
  });

appSuministro.post("/create", (req, res) => {
  con.query(/*sql*/ `INSERT INTO suministro SET ? `, req.body, (err, data) => {
    if (err) {
      console.log(req.body);
      res.send(err);
    } else 
    
    
    res.send("creado con exito");
  });
});


export default appSuministro