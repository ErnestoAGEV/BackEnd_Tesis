const express = require ('express');
const app = express();
const http = require ('http');
const server = http.createServer(app);
const logger = require ('morgan');
const cors = require('cors');


/*
IMPORTAR LAS RUTAS
*/
const usersRoutes= require('./routes/userRoutes');


const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

/*
LLAMADO DE LAS RUTAS
*/
usersRoutes(app);



server.listen(3000, '192.168.1.77' || 'localhost', function() {
    console.log('Apliacion de NodeJS ' + port + ' Iniciada...')
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});

app.get('/test', (req, res) => {
    res.send('Esta es la ruta test');
});


//Error handling
app.use((error,req,res,next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});


// 200 respuesta exitosa
// 404 significa que no se ha encontrado la ruta
// 500 error interno del servidor