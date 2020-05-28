const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchemaActuadores = new Schema({
        nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    telfijo: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('postActuador', postSchemaActuadores, 'actuadores');