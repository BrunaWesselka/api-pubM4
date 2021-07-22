const express = require('express');
const roteador = express.Router();

const CriarMusicas = require('../controller/musicasController.js');

//fazendo post, a função esta na pasta controller
roteador.post('/musicas', CriarMusicas);
roteador.get('/musicas',);
roteador.delete('/musicas',)
roteador.

module.exposts = roteador;
