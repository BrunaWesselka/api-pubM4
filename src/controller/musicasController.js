const Musicas = require('../models/modelsMusica.js');

class ControllerMusicas {

    async index(req,res){
        const resultado = await Musicas.findAll();
        res.status(200).json(resultado)
    }

    async store(req, res) {
        const { NOME_DA_MUSICA, CANTOR, ESTILO } = req.body;

        const novaMusica = await Musicas.create({ NOME_DA_MUSICA, CANTOR, ESTILO });

        res.status(201).json(novaMusica);
    }

    async update(req,res) {
        const {ID, NOME_DA_MUSICA, CANTOR, ESTILO} = req.body
        const result = await Produtos.update({
            NOME_DA_MUSICA, CANTOR, ESTILO
        },{
            where:{
                ID
            }
        })
        res.status(200).json(ID)
    }

    async destroy(req, res){
        const {ID} = req.body;

        const musica = await Musicas.destroy({
            where: {
                ID: ID
            }
        });

        res.status(200).json(ID)
    }

}

module.exports = new ControllerMusicas;
