const express = require('express');
const router = express.Router();
const carsController = require("../controllers/carsController")

router.get("/", carsController.getCars);

router.get("/buscar", carsController.getCarByTipo)

router.get("/:id", carsController.getCarById)

router.post("/nuevoauto", carsController.postCar)

router.put("/actualizar/:id", carsController.putCar)

router.delete("/eliminarAuto/:id", carsController.deleteCar)

module.exports = router;