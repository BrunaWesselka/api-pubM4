const {Sequelize, DataTypes} = require('sequelize');
 const database = require('../database/data.js');

// Criando a tabela e definindo as colunas da tabela de Comidas
const Comidas = database.define('Comidas',{
    ID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },

    OPCAO_DE_COMIDA: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    TIPO_DE_COMIDA: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    
    SOBREMESA:{
        type: DataTypes.STRING(20),
        allowNull: false
    },

    PRECO: {
        type: DataTypes.NUMBER(10),
        allowNull: false
    }
})


async function criaTabelaDeComidas(){
    await Comidas.sync()
}

criaTabelaDeComidas();
module.exports = Comidas;