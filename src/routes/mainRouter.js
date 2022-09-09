// Acá nos falta express y el router
const express = require("express");
const router = express.Router();

// Aća nos falta traer el controller
const mainController = require("../controllers/mainController");
// Acá definimos las rutas
router.get("/", mainController.showIndex);
router.get("/detalle", mainController.showMenu);
router.get("/detalle/:id", mainController.showDetalle);
router.get("/about", mainController.showAbout);

// Acá exportamos el resultado
module.exports = router;
