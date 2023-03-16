const mongoose = require ("mongoose");
require('dotenv').config()

const connect = async () => {
    try{
        const conectado = await mongoose.connect(process.env.MONGO_URL);
        console.log("Conectado a la base de datos")
    } catch (error) {
        console.log(error.message, "No se pudo conectar a la base de datos...");
    }
};

module.exports = connect;