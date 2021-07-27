const roteador = require('./router/routes.js');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser());
app.use(express.json());
app.use('/', roteador);
const APP_PORT = process.env.PORT || 3000;


//pedindo para porta que esta no arquivo de config
app.listen(APP_PORT, console.log("Servidor funcionando na porta 3000"));



