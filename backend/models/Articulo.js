const { Schema, model } = require('mongoose');

const ArticuloSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        default: "default.png"
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    descripcion: {
        type: String,
        required: true
    },
    zonasRecomendadas: {
        type: String,
        required: true
    },
    densidadSiembra: {
        type: String,
        required: true
    },
    fechaSiembra: {
        type: String,
        required: true
    },
    ciclo: {
        type: String,
        required: true
    },
    diasFloracion: {
        type: String,
        required: true
    },
    diasCosecha: {
        type: String,
        required: true
    }
});

module.exports = model("Articulo", ArticuloSchema, "articulos");
