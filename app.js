import express from "express";
import { CONFIG } from "./config/config.js";
import appSuministro from "./routers/suministro.js";
import appGenerar from "./routers/generar.js";
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

const appExpres = express();
appExpres.use(express.json());

appExpres.use("/generateToken", appGenerar); //generador de token
/* appExpres.use("/validarToken",appValiddarToken) */

appExpres.use("/suministro", appSuministro); //pendiente del  dto , proxy y del jwt

appExpres.use("/fusil-asalto", appFusilAsalto); //pendiente del  dto , proxy y del jwt

appExpres.use("/escopetas", appEscopetas); //pendiente del  dto , proxy y del jwt

appExpres.use("/cuchillo-combate", appCuchilloCombate); //pendiente del  dto , proxy y del jwt

appExpres.use("/pistolas-semi-automaitcas", appPistolasSemiAuto); //pendiente del  dto , proxy y del jwt

appExpres.use("/fusil-presicion", appFusilPresicion); //pendiente del  dto , proxy y del jwt

appExpres.use("/revolveres", appRevolveres); //pendiente del  dto , proxy y del jwt

appExpres.use("/carabinas", appCarabinas); //pendiente del  dto , proxy y del jwt

appExpres.use("/granadas", appGranadas); //pendiente del  dto , proxy y del jwt

appExpres.use("/clase-armas", appClaseArmas); //pendiente del  dto , proxy y del jwt

appExpres.listen(CONFIG, () => {
  console.log(`http://${CONFIG.hostname}:${CONFIG.port}`);
});
