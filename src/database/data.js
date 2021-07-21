const {Sequelize} = require('sequelize');

const database = new Sequelize({
    dialect:'sqlite',
    storage: './src/database/database.db'
}) 

async function testandoDatabase(){
    try{
        await database.authenticate()
        console.log("Criado com sucesso")
    }catch(err){
        throw err
    }
}

testandoDatabase();

module.exports = database;
