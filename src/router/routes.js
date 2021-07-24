const express = require('express');
const roteador = express.Router();

const ControllerMusicas = require('../controller/musicasController.js');

//CRUD da rota de musicas
roteador.get('/musicas',ControllerMusicas.index);
roteador.get('/muscias',ControllerMusicas.show);
roteador.post('/musicas',ControllerMusicas.store);
roteador.patch('/musicas',ControllerMusicas.update);
roteador.delete('/musicas',ControllerMusicas.destroy);


const ControllerBebidasQuentes = require('../controller/bebidasquentesController.js');

//CRUD da rota de bebidas quentes
roteador.get('/bebidasquentes',ControllerBebidasQuentes.index);
roteador.get('/bebidasquentes',ControllerBebidasQuentes.show);
roteador.post('/bebidasquentes',ControllerBebidasQuentes.store);
roteador.patch('/bebidasquentes',ControllerBebidasQuentes.update);
roteador.delete('/bebidasquentes',ControllerBebidasQuentes.destroy);

module.exports = roteador;
