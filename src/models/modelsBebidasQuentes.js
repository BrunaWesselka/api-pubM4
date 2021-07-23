const {Sequelize, DataTypes} = require('sequelize');
const database = require('../database/data.js');

const BebidasQuentes = database.define('BebidasQuentes', {

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

async function criartabelabebidasquentes (){
    await BebidasQuentes.sync()
}

criartabelabebidasquentes();
module.exports = BebidasQuentes;