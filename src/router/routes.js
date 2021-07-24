const express = require('express');
const roteador = express.Router();

const ControllerMusicas = require('../controller/musicasController.js');

//CRUD da rota de musicas
roteador.get('/musicas', ControllerMusicas.index);
roteador.post('/musicas', ControllerMusicas.store);
roteador.delete('/musicas',ControllerMusicas.destroy);
roteador.patch('/musicas', ControllerMusicas.update);


const ControllerBebidasQuentes = require('../controller/bebidasquentesController.js');

//CRUD da rota de bebidas quentes
roteador.get('/bebidasquentes',ControllerBebidasQuentes.index);
roteador.get('/bebidasquentes',ControllerBebidasQuentes.show);
roteador.post('/bebidasquentes',ControllerBebidasQuentes.store);
roteador.patch('/bebidasquentes', ControllerBebidasQuentes.update);
roteador.delete('/bebidasquentes', ControllerBebidasQuentes.destroy);

module.exports = roteador;

const ControllerBebidas = require('../controller/bebidasController.js');

//CRUD da rota das Bebidas Frias
roteador.get('/bebidas',ControllerBebidas.index);
roteador.get('/bebidas',ControllerBebidas.show);
roteador.post('/bebidas',ControllerBebidas.store);
roteador.patch('/bebidas', ControllerBebidas.update);
roteador.delete('/bebidas', ControllerBebidas.destroy);

module.exports = roteador;

const ControllerComidas = require('../controller/comidasController.js');

//CRUD da rota de Comidas
roteador.get('/comidas',ControllerComidas.index);
roteador.get('/comidas',ControllerComidas.show);
roteador.post('/comidas',ControllerComidas.store);
roteador.patch('/comidas', ControllerComidas.update);
roteador.delete('/comidas', ControllerComidas.destroy);

module.exports = roteador;
