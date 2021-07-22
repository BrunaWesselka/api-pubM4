const {Sequelize, DataTypes} = require('sequelize');
const database = require('../database/data.js');

const Funcionarios = database.define('Funcionarios', {

    ID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },

    Nome_funcionario: {
        type: DataTypes.STRING(20),
        defaultValue: false
    },

    Salario_funcionario: {
        type: DataTypes.NUMBER(10),
        defaultValue: false
    },

    Turno_funcionario: {
        type: DataTypes.STRING(10),
        defaultValue: false
    },

    Idade_funcionario: {
        type: DataTypes.NUMBER(10),
        defaultValue: false
    }

})

async function criartabelafuncionario (){
    await Funcionarios.sync()
}

criartabelafuncionario();

module.exports = Funcionarios;