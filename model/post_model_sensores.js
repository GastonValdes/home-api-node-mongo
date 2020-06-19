const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchemaSensores = new Schema({
    identificador: {
        type: String,
        required: true
    },
    dir_ip: {
        type: String,
        required: true
    },
    dir_mac: {
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
      date: {
        type: Date,
        default: Date.now()
    },
    habilitado: {
        type: Boolean,
        required: true
    },
    medicion: {
        type: Number,
        required: true
    }
   
});

module.exports = mongoose.model('postSensor', postSchemaSensores, 'sensores');