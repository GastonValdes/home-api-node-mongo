const express = require('express'); //express es el app server
const mongoose = require('mongoose'); //driver para conectar a mongo
const app = express();
const mongodb = process.env.MONGODB; //declaro la usi de coneccion apuntado a una variable de entorno.
// la variable en windows se agrega con el comando $env:MONGODB="URI"
//Por ejemplo $env:MONGODB="mongodb://dba:password@localhost:37111/home?authSource=admin"
//el comando se ejecuta desde powershell
var cors = require('cors'); //trabajo el cors para evitar el filtrado
const postRoutes = require('./routes/api_route'); //declaro donde voy a manejar el ruteo de la api
app.use(cors()) ;
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

//declaro la ruta default
app.use('/', postRoutes); 

//declaro la respuesta default si alguien hace un get a la ruta default
app.get('/', (req, res, next) => {
    res.send('running node-api');
});

//inicio la conexion a la base
mongoose
    .connect(mongodb, {
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(3010, console.log('Server started at port 3010')); //declaro el puerto en el que levanto el server y lo informo por consola
    })
    .catch(err => console.log(err));