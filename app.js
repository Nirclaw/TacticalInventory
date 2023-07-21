import express from "express";
import { CONFIG } from "./config/config.js";
import appSuministro from "./routers/suministro.js";
import appGenerar from "./routers/generar.js";
import appValiddarToken from "./routers/validartoken.js";
const appExpres = express();
appExpres.use(express.json());

appExpres.use("/generateToken",appGenerar)
/* appExpres.use("/validarToken",appValiddarToken) */



appExpres.use("/suministro",appValiddarToken,appSuministro); //pendiente del enrutador y del jwt

appExpres.listen(CONFIG, () => {
  console.log(`http://${CONFIG.hostname}:${CONFIG.port}`);
});
