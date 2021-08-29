const {Sequelize, DataTypes} = require('sequelize');
 const database = require('../database/data.js');

// Criando a tabela e definindo as colunas da tabela de Comidas
const Sobremesas = database.define('Sobremesas',{
    ID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },

    Nome_do_prato: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    
    Ingredientes:{
        type: DataTypes.STRING(250),
        allowNull: false
    },

    Preco: {
        type: DataTypes.NUMBER(10),
        allowNull: false
    }
})


async function criaTabelaDeSobremesas(){
    await Sobremesas.sync()
}

criaTabelaDeSobremesas();
module.exports = Sobremesas;