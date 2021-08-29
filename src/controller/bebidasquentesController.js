const BebidasQuentes = require("../models/modelsBebidasQuentes.js");

class ControllerBebidasQuentes {

    async index(req, res) {
        const resultado = await BebidasQuentes.findAll();
        res.status(200).json(resultado)
    }

    async show(req, res) {
        const { tipo } = req.body;
        const resultado = await BebidasQuentes.findAll({
            where: {
                Tipo_de_bebida: tipo
            }
        })
        res.status(200).json(resultado);
    }

    async store(req, res) {
        const { tipo, marca, teor_alcolico, preco } = req.body;
        
        const verificando = await BebidasQuentes.findOne({
            where: {Tipo_de_bebida:tipo}
        });

        if(verificando) throw new Error("Bebida já existente");

        const novaBebida = await BebidasQuentes.create({ Tipo_de_bebida:tipo, Marca_da_bebida:marca, Teor_alcolico:teor_alcolico, Preco:preco });
        res.status(201).json(novaBebida);
    }

    async update(req, res) {
        const { id, tipo, marca, teor_alcolico, preco } = req.body;
        const resultado = await BebidasQuentes.update({Tipo_de_bebida:tipo, Marca_da_bebida:marca, Teor_alcolico:teor_alcolico, Preco:preco}, {
            where: {
                ID: id
            }
        });
        res.status(200).json(resultado);
    }

    async destroy(req, res) {
        const {tipo} = req.body;
        const resultado = await BebidasQuentes.destroy({
            where:{
                Tipo_de_bebida:tipo
            }
        })
        res.status(200).json(resultado);
    }
}


module.exports = new ControllerBebidasQuentes;