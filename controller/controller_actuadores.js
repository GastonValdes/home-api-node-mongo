const Actuador = require('../model/post_model_sensores');

exports.addActuador = (req, res, next) => {
  const postActuador = new Actuador({
    identificador: req.body.identificador,
    tipo: req.body.tipo,
    subtipo: req.body.subtipo,
    habilitado: req.body.habilitado,
    operacion: req.body.operacion
    });
  postActuador
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('Estado de actuador registrado con éxito');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.showActuadores = (req, res, next) => {
  Actuador.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.showSingleActuador = (req, res, next) => {
  Actuador.findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.updateActuador = (req, res, next) => {
  Actuador.findById(req.body.id).then(result => {
  identificador = req.body.identificador,
    result.tipo = req.body.tipo,
    result.subtipo = req.body.subtipo,
    result.habilitado = req.body.habilitado,
    result.operacion = req.body.operacion;
    return result.save();
  }).then(postActuador => {
    res.send('estado de actuador actualizado con éxito');
  }).catch(err => res.status(400).send(err));
};

exports.deleteActuador = (req, res, next) => {
  Post.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('actuador eliminado');
    }).catch(err => res.status(400).send(err));
};