const roteador = require('./router/routes.js');
const express = require('express');
const app = express();
const cors = require('cors')

const bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser());
app.use(express.json());
app.use('/', roteador);
const APP_PORT = process.env.PORT || 5000;


app.listen(APP_PORT, console.log("Servidor funcionando na porta 5000"));



