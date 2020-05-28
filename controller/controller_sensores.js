const Post = require('../model/post_model_sensores');

exports.addSensor = (req, res, next) => {
  const post = new Post({
    identificador: req.body.identificador,
    tipo: req.body.tipo,
    subtipo: req.body.subtipo,
    habilitado: req.body.habilitado,
    medicion: req.body.medicion
    });
  post
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('post added successfully');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.showSensores = (req, res, next) => {
  Post.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.showSingleSensor = (req, res, next) => {
  Post.findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.updateSensor = (req, res, next) => {
  Post.findById(req.body.id).then(result => {
  identificador = req.body.identificador,
    result.tipo = req.body.tipo,
    result.subtipo = req.body.subtipo,
    result.habilitado = req.body.habilitado,
    result.medicion = req.body.medicion;
    return result.save();
  }).then(post => {
    res.send('Sensor updated successfully');
  }).catch(err => res.status(400).send(err));
};

exports.deleteSensor = (req, res, next) => {
 Post.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('Sensor deleted');
    }).catch(err => res.status(400).send(err));
};