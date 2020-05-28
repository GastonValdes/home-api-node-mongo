const Post = require('../model/post_model_sensores');

exports.addSensorPost = (req, res, next) => {
  const post = new Post({
    identificador: req.body.identificador,
    tipo: req.body.tipo,
    subtipo: req.body.subtipo,
    habilitado: req.body.habilitado,
    operacion: req.body.operacion
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

exports.showPost = (req, res, next) => {
  Post.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.singlePost = (req, res, next) => {
  Post.findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

exports.updatePost = (req, res, next) => {
  Post.findById(req.body.id).then(result => {
  identificador = req.body.identificador,
    result.tipo = req.body.tipo,
    result.subtipo = req.body.subtipo,
    result.habilitado = req.body.habilitado,
    result.operacion = req.body.operacion;
    return result.save();
  }).then(post => {
    res.send('post updated successfully');
  }).catch(err => res.status(400).send(err));
};

exports.deletePost = (req, res, next) => {
  Post.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('post deleted');
    }).catch(err => res.status(400).send(err));
};