import express from "express";
import { CONFIG } from "./config/config.js";
import appSuministro from "./routers/suministro.js";
import appGenerar from "./routers/generar.js";
import appValiddarToken from "./routers/validartoken.js";
import appFusilAsalto from "./routers/fusil_asalto.js";
const appExpres = express();
appExpres.use(express.json());

appExpres.use("/generateToken",appGenerar)
/* appExpres.use("/validarToken",appValiddarToken) */


appExpres.use("/suministro",appSuministro); //pendiente del  dto , proxy y del jwt
appExpres.use("/fusil-asalto",appFusilAsalto)

appExpres.listen(CONFIG, () => {
  console.log(`http://${CONFIG.hostname}:${CONFIG.port}`);
});
