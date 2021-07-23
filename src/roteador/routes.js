const express = require('express');
const roteador = express.Router();

const ControllerMusicas = require('../controller/musicasController.js');

//CRUD da rota de musicas
roteador.get('/musicas', ControllerMusicas.index);
roteador.post('/musicas', ControllerMusicas.store);
roteador.delete('/musicas',ControllerMusicas.destroy)


module.exposts = roteador;
