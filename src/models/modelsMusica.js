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
        defaultValue: false
    },

    CANTOR: {
        type: DataTypes.STRING(20),
        defaultValue: false
    },

    ESTILO: {
        type: DataTypes.STRING(50),
        defaultValue: false
    }
})


async function criaTabelaDeMusica(){
    await Musicas.sync()
}

criaTabelaDeMusica();
module.exports = Musicas;