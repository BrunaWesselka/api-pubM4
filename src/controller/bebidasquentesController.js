const BebidasQuentes = require("../models/modelsBebidasQuentes.js");

class ControllerBebidasQuentes {

    async index(req, res) {
        const resultado = await BebidasQuentes.findAll();
        res.status(200).json(resultado)
    }

    async show(req, res) {
        const { nome } = req.body;
        const resultado = await BebidasQuentes.findAll({
            where: {
                Tipo_de_bebida: nome
            }
        })
        res.status(200).json(resultado);
    }

    async store(req, res) {
        const { Tipo_de_bebida, Marca_da_bebida, Teor_alcolico, Preco } = req.body;
        const verificando = await BebidasQuentes.findOne({
            where: Tipo_de_bebida
        });
        if(verificando) throw new Error("Bebida já existente");
        const novaBebida = await BebidasQuentes.create({ Tipo_de_bebida, Marca_da_bebida, Teor_alcolico, Preco });
        res.status(201).json(novaBebida);
    }

    async update(req, res) {
        const { id, Tipo_de_bebida, Marca_da_bebida, Teor_alcolico, Preco } = req.body;
        const resultado = await BebidasQuentes.update({ Tipo_de_bebida, Marca_da_bebida, Teor_alcolico, Preco}, {
            where: {
                ID: id
            }
        });
        res.status(200).json(id);
    }

    async destroy(req, res) {
        const {Tipo_de_bebida} = req.body;
        const resultado = await BebidasQuentes.destroy({
            where:{
                Tipo_de_bebida:Tipo_de_bebida
            }
        })
        res.status(200).json(Tipo_de_bebida);
    }
}


module.exports = new ControllerBebidasQuentes;