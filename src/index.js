const express = require('express');
const app = express();
const roteador = require('./roteador/routes.js');
const bodyParser = require('body-parser')

const {APP_PORT} = require('./config/config.js');

app.use(bodyParser.json());

//pedindo para porta que esta no arquivo de config
app.listen(APP_PORT, console.log("Servidor funcionando na porta 3000"));
