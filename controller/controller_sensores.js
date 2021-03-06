 const Sensor = require('../model/post_model_sensores');

exports.addSensor = (req, res, next) => {
  const postSensor = new Sensor({
    identificador: req.body.identificador,
    dir_ip: req.body.dir_ip,
    dir_mac: req.body.dir_mac,
    tipo: req.body.tipo,
    subtipo: req.body.subtipo,
    habilitado: req.body.habilitado,
    medicion: req.body.medicion
    });
  postSensor
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('Medición de Sensor agregada con éxito');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.showSensores = (req, res, next) => {
  Sensor.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.showSingleSensor = (req, res, next) => {
  Sensor.findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.updateSensor = (req, res, next) => {
  Sensor.findById(req.body.id).then(result => {
  result.identificador = req.body.identificador,
    result.dir_ip = req.body.dir_ip,
    result.dir_mac= req.body.dir_mac,
    result.tipo = req.body.tipo,
    result.subtipo = req.body.subtipo,
    result.habilitado = req.body.habilitado,
    result.medicion = req.body.medicion;
    return result.save();
  }).then(postSensor => {
    res.send('Medición de sensor actualizada con éxito');
  }).catch(err => res.status(400).send(err));
};

exports.deleteSensor = (req, res, next) => {
 Sensor.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('Medición de sensor eliminada');
    }).catch(err => res.status(400).send(err));
};