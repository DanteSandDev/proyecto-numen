const Cars = require("../models/Cars")



const getCars = async (req, res) => {
    try{
        const cars = await Cars.find()
        if(cars){
            res.status(200).json({
                msg: "Lista de Autos",
                Autos: cars,
            });
        }else{
            res.status(404).json({
                Autos: null,
                msg: "No se encontro la lista de autos, intente mas tarde"
            });
        }


    }catch(error){
        res.status(500).json({msg:"error - " + error.message})
    }
}

const getCarById = async (req, res) => {

    const car = await Cars.findById(req.params.id)

    res.status(200).json({car, msg: "ok"})
}

const getCarByTipo = async (req, res) => {
    const car = await Cars.findOne({tipo: req.query.tipo})

    res.status(200).json({car, msg: "ok"})
}

const postCar = async (req, res) => {
    const newCar = new Cars(req.body)
    console.log(newCar)
    await newCar.save()

    res.status(201).json({tipo: newCar.tipo, msg: "ok"})
}


const putCar = async (req, res) => {

    try{
        await Cars.findByIdAndUpdate(req.params.id, req.body)
        const editedCar = req.body
        res.status(200).json({msg:"Has editado estos datos", datosEditados: editedCar})
    }catch(error){
        res.status(500).json({msg: "Error - " + error.message})
    }

}


const deleteCar = async (req, res) => {
    try {
        //const cars = Cars.findById(req.params.id)
        await Cars.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:"Eliminaste un auto"})
    }catch(error){
        res.status(500).json({msg: "Error - " + error.message})
    }
}


module.exports = {getCars, getCarById, getCarByTipo, postCar, putCar, deleteCar}