const {Sequelize, DataTypes} = require('sequelize');
const database = require('../database/data.js');

const Bebidas = database.define('Bebidas', {

    ID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },

    OPCAO_DE_BEBIDAS: {
        type: DataTypes.STRING(10),
        allowNull: false
    },

    QUANTIDADE_ML: {
        type: DataTypes.NUMBER(15),
        allowNull: false
    },

    PRECO: {
        type: DataTypes.NUMBER(10),
        allowNull: false
    }

})

async function criartabelaBebidasFrias (){
    await Bebidas.sync()
}

criartabelaBebidasFrias();
module.exports = Bebidas;