const roteador = require('./router/routes.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser());
app.use(express.json());
const {APP_PORT} = require('./config/config.js');

app.use('/', roteador);

//pedindo para porta que esta no arquivo de config
app.listen(APP_PORT, console.log("Servidor funcionando na porta 3000"));



