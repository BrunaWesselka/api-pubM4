const express = require('express');
const bodyParser = require('body-barser')
const app = express();
const {APP_PORT} = require('./config/config.js');

app.use(bodyParser.json());

app.listen(APP_PORT, console.log("Servidor funcionando na porta 3000"));
