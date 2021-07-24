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
        allowNull: false
    },

    Salario_funcionario: {
        type: DataTypes.NUMBER(10),
        allowNull: false
    },

    Turno_funcionario: {
        type: DataTypes.STRING(10),
        allowNull: false
    },

    Idade_funcionario: {
        type: DataTypes.NUMBER(10),
        allowNull: false
    }

})

async function criartabelafuncionario (){
    await Funcionarios.sync()
}

criartabelafuncionario();

module.exports = Funcionarios;