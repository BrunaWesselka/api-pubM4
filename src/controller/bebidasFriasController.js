const Bebidas = require("../models/modelsBebidasFrias.js");

class ControllerBebidasFrias {

    async index(req, res) {
        const resultado = await Bebidas.findAll();
        res.status(200).json(resultado)
    }

    async show(req, res) {
        const { tipo } = req.body;
        const resultado = await Bebidas.findAll({
            where: {
                Tipo_de_bebida: tipo
            }
        })
        res.status(200).json(resultado);
    }

    async store(req, res) {
        const { tipo, marca, teor_alcolico, preco } = req.body;
        
        const verificando = await Bebidas.findOne({
            where: {Tipo_de_bebida: tipo}
        });
        
        if(verificando) throw new Error("Bebida já existente");
        
        const novaBebidaFria = await Bebidas.create({Tipo_de_bebida:tipo,Marca_da_bebida:marca, Teor_alcolico:teor_alcolico, Preco:preco});
        
        res.status(201).json(novaBebidaFria);
    }

    async update(req, res) {
        const { ID, tipo, marca, teor_alcolico, preco } = req.body;
        
        const resultado = await Bebidas.update({ Tipo_de_bebida:tipo,Marca_da_bebida:marca, Teor_alcolico:teor_alcolico, Preco:preco }, {
            where: {ID: ID}
        })
        res.status(200).json(resultado);
    }

    async destroy(req, res) {
        const {tipo} = req.body;
        
        const resultado = await Bebidas.destroy({
            where:{Tipo_de_bebida:tipo}
        })
        res.status(200).json(resultado);
    }
}


module.exports = new ControllerBebidasFrias;