const {Sequelize, DataTypes} = require('sequelize');
 const database = require('../database/data.js');

// Criando a tabela e definindo as colunas da tabela
const Musicas = database.define('Musicas',{
    ID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },

    NOME_DA_MUSICA: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    CANTOR: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    ESTILO: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    LINK: {
        type: DataTypes.STRING(250),
        allowNull: false,
    }
})


async function criaTabelaDeMusica(){
    await Musicas.sync()
}

criaTabelaDeMusica();
module.exports = Musicas;