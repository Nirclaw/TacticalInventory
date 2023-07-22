import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import {buscarCuchilloSerial} from "../../controller/dtoCuchillos.js"
const proxybuscarCuchilloSerial = express();

proxybuscarCuchilloSerial.use((req, res, next) => {
  try {
    let data = plainToClass(buscarCuchilloSerial, req.body.serial, {
      excludeExtraneousValues: true,
    });

    req.body = JSON.parse(JSON.stringify(data))
    next()
  } catch (error) {
    res.status(error.status).send("error");
  }
});


export default proxybuscarCuchilloSerial