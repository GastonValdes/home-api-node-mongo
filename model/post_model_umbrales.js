const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchemaUmbrales = new Schema({
    identificador: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    valor: {
        type: String,
        required: true
    },
    habilitado: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('post', postSchemaUmbrales, 'umbrales');