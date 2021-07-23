const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () =>{
    const app = express();

    app.use(bodyParser.json())

    consign()
        .include('controller')
        .into(app)
}

module.exports = app_config = {
    APP_PORT: 3000
}

