const Musicas = require('../models/modelsMusica.js');

class ControllerMusicas {

    async index(req,res){
        const resultado = await Musicas.findAll();
        res.status(200).json(resultado);
    }

    async show(req, res) {
        const {nome} = req.body;
        const resultado = await Musicas.findAll({
            where: {
                NOME_DA_MUSICA: nome
            }
        })
        res.status(200).json(nome);
    }

    async store(req, res) {
        const {name, cantor, estilo} = req.body;
       
        const novaMusica = await Musicas.create({NOME_DA_MUSICA:name, CANTOR:cantor, ESTILO:estilo});
        
        res.status(201).json(novaMusica);
    }

    async update(req,res) {
        const {id,name, cantor, estilo} = req.body
        const result = await Musicas.update({NOME_DA_MUSICA: name, CANTOR: cantor, ESTILO:estilo},{
            where:{
                ID: id
            }
        });
        res.status(200).json(id)
    }

    async destroy(req, res){
        const {nome} = req.body;

        const musica = await Musicas.destroy({
            where: {
                NOME_DA_MUSICA: nome
            }
        });
        res.status(200).json(nome);
    }
}

module.exports = new ControllerMusicas;
