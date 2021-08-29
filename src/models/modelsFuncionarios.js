const {Sequelize, DataTypes} = require('sequelize');
const database = require('../database/data.js');

const Funcionarios = database.define('Funcionarios', {

    ID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },

    Nome: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
     
    GitHub: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    Linkedin: {
        type: DataTypes.STRING(50),
        allowNull:false
    }

})

async function criartabelafuncionario (){
    await Funcionarios.sync()
}

criartabelafuncionario();

module.exports = Funcionarios;