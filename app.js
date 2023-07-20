import express from "express";
import { CONFIG } from "./config/config.js";

const appExpres = express();
appExpres.use(express.json());

// appExpres.use("/inventario"); //pendiente del enrutador y del jwt

appExpres.listen(CONFIG, () => {
  console.log(`http://${CONFIG.hostname}:${CONFIG.port}`);
});


