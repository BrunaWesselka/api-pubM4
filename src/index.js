const express = require('express');
const app = express();
const {APP_PORT} = require('./config/config.js');



app.listen(APP_PORT, console.log("Servidor funcionando na porta 3000"));
