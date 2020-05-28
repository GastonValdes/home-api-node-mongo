const Post = require('../model/post_model_umbrales');

exports.addSUmbral = (req, res, next) => {
  const post = new Post({
    identificador: req.body.identificador,
    descripcion: req.body.descripcion,
    valor: req.body.valor,
    habilitado: req.body.habilitado
    });
  post
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('umbral added successfully');
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
  identificador: req.body.identificador,
    result.descripcion = req.body.descripcion,
    result.valor = req.body.valor,
    result.habilitado = req.body.habilitado;
    return result.save();
  }).then(post => {
    res.send('umbral updated successfully');
  }).catch(err => res.status(400).send(err));
};

exports.deletePost = (req, res, next) => {
  Post.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('umbral deleted');
    }).catch(err => res.status(400).send(err));
};