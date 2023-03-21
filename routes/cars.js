const express = require('express');
const router = express.Router();
const carsController = require("../controllers/carsController");
const { check } = require("express-validator");
const validarSerie = require("../middlewares/customMiddleware")

router.get("/", carsController.getCars);

router.get("/buscar", carsController.getCarByTipo)

router.get("/:id", carsController.getCarById)

router.post("/nuevoauto", [
    check("marca").not().isEmpty().withMessage("La marca del auto es obligatoria"),
    check("tipo").not().isEmpty().withMessage("El tipo del auto es obligatorio"),
    check("modelo").not().isEmpty().withMessage("El modelo del auto es obligatorio").isNumeric().withMessage("El modelo debe ser numérico"),
    check("color").not().isEmpty().withMessage("El color del auto es obligatorio"),
    check("precio").not().isEmpty().withMessage("El precio del auto es obligatorio").isNumeric().withMessage("El precio debe ser numérico"),
    check("serie").not().isEmpty().withMessage("El numero de serie es obligatorio")
], validarSerie, carsController.postCar)

router.put("/actualizar/:id", [
    check("marca").not().isEmpty().withMessage("La marca del auto es obligatoria"),
    check("tipo").not().isEmpty().withMessage("El tipo del auto es obligatorio"),
    check("modelo").not().isEmpty().withMessage("El modelo del auto es obligatorio").isNumeric().withMessage("El modelo debe ser numérico"),
    check("color").not().isEmpty().withMessage("El color del auto es obligatorio"),
    check("precio").not().isEmpty().withMessage("El precio del auto es obligatorio").isNumeric().withMessage("El precio debe ser numérico"),
    check("serie").not().isEmpty().withMessage("El numero de serie es obligatorio")
], validarSerie, carsController.putCar)

router.delete("/eliminarAuto/:id", carsController.deleteCar)



module.exports = router;