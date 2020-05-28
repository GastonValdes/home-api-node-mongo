 const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchemaActuadores = new Schema({
    identificador: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    subtipo: {
        type: String,
        required: true
    },
    habilitado: {
        type: String,
        required: true
    },
    operacion: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('postActuador', postSchemaActuadores, 'actuadores');