const Cars = require("../models/Cars")

const validarSerie = async (req, res, next) => {

    const car = await Cars.findOne({serie: req.body.serie})

    if(car){
        res.status(400).json({msg: "El número de serie ya existe"})
    }else{
        next()
    }
}



module.exports = validarSerie;