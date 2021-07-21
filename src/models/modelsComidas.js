const {Sequelize, DataTypes} = require('sequelize');
const database = require('../database/data.js');

const Comidas = database.define('Comidas', {
    ID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    Tipo_de_comida:{
        type: DataTypes.STRING(20),
        defaultValue: false
    },
    Preco:{
        type: DataTypes.NUMBER(6),
        defaultValue: false
    }
})
async function criarTabelaComidas (){
    await Comidas.sync()
}

criarTabelaComidas ();
module.exports = Comidas;