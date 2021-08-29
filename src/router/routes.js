const express = require('express');
const roteador = express.Router();

const ControllerMusicas = require('../controller/musicasController.js');

//CRUD da rota de musicas
roteador.get('/musicas', ControllerMusicas.index);
roteador.get('/musicas/unique-value', ControllerMusicas.show);
roteador.post('/musicas', ControllerMusicas.store);
roteador.delete('/musicas',ControllerMusicas.destroy);
roteador.patch('/musicas', ControllerMusicas.update);


const ControllerBebidasQuentes = require('../controller/bebidasquentesController.js');

//CRUD da rota de bebidas quentes
roteador.get('/bebidasquentes',ControllerBebidasQuentes.index);
roteador.get('/bebidasquentes/unique-value',ControllerBebidasQuentes.show);
roteador.post('/bebidasquentes',ControllerBebidasQuentes.store);
roteador.patch('/bebidasquentes', ControllerBebidasQuentes.update);
roteador.delete('/bebidasquentes', ControllerBebidasQuentes.destroy);


const ControllerBebidasFrias = require('../controller/bebidasFriasController.js');

//CRUD da rota das Bebidas Frias
roteador.get('/bebidas',ControllerBebidasFrias.index);
roteador.get('/bebidas/unique-value',ControllerBebidasFrias.show);
roteador.post('/bebidas',ControllerBebidasFrias.store);
roteador.patch('/bebidas', ControllerBebidasFrias.update);
roteador.delete('/bebidas', ControllerBebidasFrias.destroy);


const ControllerComidasSalgadas = require('../controller/comidasSalgadasController.js');

//CRUD da rota de Comidas
roteador.get('/comidas-salgadas',ControllerComidasSalgadas.index);
roteador.get('/comidas-salgadas/unique-value',ControllerComidasSalgadas.show);
roteador.post('/comidas-salgadas',ControllerComidasSalgadas.store);
roteador.patch('/comidas-salgadas', ControllerComidasSalgadas.update);
roteador.delete('/comidas-salgadas', ControllerComidasSalgadas.destroy);

const ControllerFuncionarios = require('../controller/funcionariosController.js');

//CRUD da rota de Funcionarios
roteador.get('/funcionarios', ControllerFuncionarios.index);
roteador.get('/funcionarios/unique-value',ControllerFuncionarios.show);
roteador.post('/funcionarios',ControllerFuncionarios.store);
roteador.patch('/funcionarios', ControllerFuncionarios.update);
roteador.delete('/funcionarios', ControllerFuncionarios.destroy);

const ControllerSobremesas = require('../controller/sobremesasController.js');

//CRUD da rota de Sobremesas
roteador.get('/sobremesas', ControllerSobremesas.index);
roteador.get('/sobremesas/unique-value',ControllerSobremesas.show);
roteador.post('/sobremesas',ControllerSobremesas.store);
roteador.patch('/sobremesas', ControllerSobremesas.update);
roteador.delete('/sobremesas', ControllerSobremesas.destroy);
module.exports = roteador;
