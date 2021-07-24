const Bebidas = require("../models/modelsBebidas.js");

class ControllerBebidasFrias {

    async index(req, res) {
        const resultado = await Bebidas.findAll();
        res.status(200).json(resultado)
    }

    async show(req, res) {
        const { nome } = req.body;
        const resultado = await Bebidas.findAll({
            where: {
                OPCAO_DE_BEBIDAS: nome
            }
        })
        res.status(200).json(nome);
    }

    async store(req, res) {
        const { OPCAO_DE_BEBIDAS, QUANTIDADE_ML, PRECO } = req.body;
        const novaBebidaFria = await Bebidas.create({ OPCAO_DE_BEBIDAS, QUANTIDADE_ML, PRECO });
        res.status(201).json(novaBebidaFria);
    }

    async update(req, res) {
        const { ID, OPCAO_DE_BEBIDAS, QUANTIDADE_ML, PRECO } = req.body;
        const resultado = await Bebidas.update({ OPCAO_DE_BEBIDAS, QUANTIDADE_ML, PRECO }, {
            where: {
                ID: ID
            }
        }

        )
        res.status(200).json(id);
    }

    async destroy(req, res) {
        const {OPCAO_DE_BEBIDAS} = req.body;
        const resultado = await Bebidas.destroy({
            where:{
                OPCAO_DE_BEBIDAS:OPCAO_DE_BEBIDAS
            }
        })
        res.status(200).json(OPCAO_DE_BEBIDAS);
    }
}


module.exports = new ControllerBebidasFrias;