const {Sequelize, DataTypes} = require('sequelize');
const database = require('../database/data.js');

const Bebidas = database.define('Bebidas', {

    ID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },

    Tipo_de_bebida: {
        type: DataTypes.STRING(10),
        allowNull: false
    },

    Marca_da_bebida: {
        type: DataTypes.STRING(15),
        allowNull: false
    },

    Teor_alcolico: {
        type: DataTypes.INTEGER(5),
        allowNull: false
    },

    Preco: {
        type: DataTypes.NUMBER(10),
        allowNull: false
    }

})

async function criartabelaBebidasFrias (){
    await Bebidas.sync()
}

criartabelaBebidasFrias();
module.exports = Bebidas;