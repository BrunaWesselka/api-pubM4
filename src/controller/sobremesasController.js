const Sobremesas = require('../models/modelsSobremesas.js');

class ControllerSobremesas {

    async index(req,res){
        const resultado = await Sobremesas.findAll();
        res.status(200).json(resultado);
    }

    async show(req, res) {
        const { prato } = req.body;
        const resultado = await Sobremesas.findAll({
            where: {
                Nome_do_prato: prato
            }
        })
        res.status(200).json(resultado);
    }

    async store(req, res) {
        const {prato, ingredientes, preco} = req.body;

        const verificando = await Sobremesas.findOne({
            where: {Nome_do_prato: prato}
        });

        if(verificando) throw new Error("Comida já existente")
       
        const novaComida = await Sobremesas.create({Nome_do_prato:prato, Ingredientes:ingredientes, SOBREMESA:SOBREMESA, Preco:preco});
        
        res.status(201).json(novaComida);
    }

    async update(req,res) {
        const {id,prato, ingredientes, preco} = req.body
        const result = await Sobremesas.update({Nome_do_prato:prato, Ingredientes:ingredientes, SOBREMESA:SOBREMESA, Preco:preco},{
            where:{
                ID: id
            }
        });
        res.status(200).json(result)
    }

    async destroy(req, res){
        const {prato} = req.body;

        const comida = await Sobremesas.destroy({
            where: {
                Nome_do_prato: prato
            }
        });
        res.status(200).json(comida);
    }
}

module.exports = new ControllerSobremesas;