import express from "express";
import { CONFIG } from "./config/config.js";
const appExpres = express();
appExpres.use(express.json());
import appSuministro from "./routers/suministro.js";
import appValiddarToken from "./routers/validartoken.js";
import appFusilAsalto from "./routers/fusil_asalto.js";
import appEscopetas from "./routers/escopetas.js";
import appCuchilloCombate from "./routers/cuchillo_combate.js";
import appPistolasSemiAuto from "./routers/pistolas_semiAuto.js";
import appFusilPresicion from "./routers/fusl_presicion.js";
import appRevolveres from "./routers/revolveres.js";
import appCarabinas from "./routers/carabinas.js";
import appGranadas from "./routers/granadas.js";
import appClaseArmas from "./routers/clase_armas.js";
import appGenerar from "./routers/generar.js";

appExpres.use("/generateToken", appGenerar); //generador de token


/* appExpres.use("/validarToken",appValiddarToken) */

appExpres.use("/suministro",appValiddarToken, appSuministro); 

appExpres.use("/fusil-asalto",appValiddarToken, appFusilAsalto); 

appExpres.use("/escopetas",appValiddarToken, appEscopetas); 

appExpres.use("/cuchillo-combate",appValiddarToken, appCuchilloCombate); 

appExpres.use("/pistolas-semi-automaitcas",appValiddarToken, appPistolasSemiAuto); 

appExpres.use("/fusil-presicion",appValiddarToken, appFusilPresicion); 

appExpres.use("/revolveres",appValiddarToken, appRevolveres); 

appExpres.use("/carabinas",appValiddarToken, appCarabinas); 

appExpres.use("/granadas",appValiddarToken, appGranadas); 

appExpres.use("/clase-armas",appValiddarToken, appClaseArmas); 

appExpres.listen(CONFIG, () => {
  console.log(`http://${CONFIG.hostname}:${CONFIG.port}`);
});
