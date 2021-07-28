const Comidas = require('../models/modelsComidas.js');

class ControllerComidas {

    async index(req,res){
        const resultado = await Comidas.findAll();
        res.status(200).json(resultado);
    }

    async show(req, res) {
        const { nome } = req.body;
        const resultado = await Comidas.findAll({
            where: {
                OPCAO_DE_COMIDAS: nome
            }
        })
        res.status(200).json(resultado);
    }

    async store(req, res) {
        const {OPCAO_DE_COMIDA, TIPO_DE_COMIDA, SOBREMESA, PRECO} = req.body;

        const verificando = await Comidas.findOne({
            where: OPCAO_DE_COMIDA
        });

        if(verificando) throw new Error("Comida já existente")
       
        const novaComida = await Comidas.create({OPCAO_DE_COMIDA:OPCAO_DE_COMIDA, TIPO_DE_COMIDA:TIPO_DE_COMIDA, SOBREMESA:SOBREMESA, PRECO:PRECO});
        
        res.status(201).json(novaComida);
    }

    async update(req,res) {
        const {ID,OPCAO_DE_COMIDA, TIPO_DE_COMIDA, PRECO} = req.body
        const result = await Comida.update({OPCAO_DE_COMIDA:OPCAO_DE_COMIDA, TIPO_DE_COMIDA:TIPO_DE_COMIDA, SOBREMESA:SOBREMESA, PRECO:PRECO},{
            where:{
                ID: id
            }
        });
        res.status(200).json(id)
    }

    async destroy(req, res){
        const {OPCAO_DE_COMIDA} = req.body;

        const comida = await Comidas.destroy({
            where: {
                OPCAO_DE_COMIDA: OPCAO_DE_COMIDA
            }
        });
        res.status(200).json(OPCAO_DE_COMIDA);
    }
}

module.exports = new ControllerComidas;