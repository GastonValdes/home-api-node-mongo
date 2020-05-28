const express = require('express');
const router = express.Router();
const controllerSensores = require('../controller/controller_sensores');
const controllerActuadores = require('../controller/controller_actuadores');
const controllerRegistros = require('../controller/controller_registros');
const controllerUmbrales = require('../controller/controller_umbrales');

//endPoint Sensores
router.post('/sensores', controllerSensores.addSensor);
router.get('/sensores', controllerSensores.showSensores);
router.get('/sensores/:id', controllerSensores.showSingleSensor);
router.patch('/sensores', controllerSensores.updateSensor);
router.delete('/sensores/:id', controllerSensores.deleteSensor);
//endPoint umbrales
router.post('/umbrales', controllerUmbrales.addUmbral);
router.get('/umbrales', controllerSensores.showUmbrales);
router.get('/umbrales/:id', controllerSensores.showSingleUmbral);
router.patch('/umbrales', controllerSensores.updateUmbral);
router.delete('/umbrales/:id', controllerSensores.deleteUmbral);
//endPoint Actuadores
router.post('/actuadores', controllerUmbrales.addActuador);
router.get('/actuadores', controllerSensores.showActuadores);
router.get('/actuadores/:id', controllerSensores.showSingleActuador);
router.patch('/actuadores', controllerSensores.updateActuador);
router.delete('/actuadores/:id', controllerSensores.deleteActuador);
//endPoint Registros
router.post('/registros', controllerUmbrales.addRegistro);
router.get('/registros', controllerSensores.showARegistros);
router.get('/registros/:id', controllerSensores.showSingleRegistro);
router.patch('/registros', controllerSensores.updateRegistro);
router.delete('/registros/:id', controllerSensores.deleteRegistro);

module.exports = router;