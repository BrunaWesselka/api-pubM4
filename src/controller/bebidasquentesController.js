const BebidasQuentes = require("../models/modelsBebidasQuentes.js");

class ControllerBebidasQuentes{

    async index(req, res){
        const resultado = await BebidasQuentes.findAll();
        res.status(200).json(resultado)
    }

    async show(req, res){
        const {nome} = req.body;
        const resultado = await BebidasQuentes.findAll({
            where:{
                Tipo_de_bebida:nome
            }
        })
        res.status(200).json(nome);
    }
}


module.exports = new ControllerBebidasQuentes;