const mongoose  = require ("mongoose");

const Schema = mongoose.Schema
const carSchema = new Schema ({
    marca:{
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
})


const Cars  = mongoose.model("Cars", carSchema);

module.exports = Cars;