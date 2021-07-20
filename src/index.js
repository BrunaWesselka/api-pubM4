const express = require('express');
const app = express();
const {APP_PORT} = require('./config/config.js');



app.listen(APP_PORT, console.log("flamengo"));
