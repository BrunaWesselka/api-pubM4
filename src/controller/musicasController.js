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
        res.status(200).json(resultado);
    }

    async store(req, res) {
        const {nome, cantor, estilo, link} = req.body;

        const verificando = await Musicas.findOne({
            where: {NOME_DA_MUSICA:nome}
        });

        if(verificando) throw new Error("Musica ja existente")
       
        const novaMusica = await Musicas.create({NOME_DA_MUSICA:nome, CANTOR:cantor, ESTILO:estilo, LINK:link});
        
        res.status(201).json(novaMusica);
    }

    async update(req,res) {
        const {id,name, cantor, estilo, link} = req.body
        const resultado = await Musicas.update({NOME_DA_MUSICA: name, CANTOR: cantor, ESTILO:estilo, LINK:link},{
            where:{
                ID: id
            }
        });
        res.status(200).json(resultado)
    }

    async destroy(req, res){
        const {nome} = req.body;

        const musica = await Musicas.destroy({
            where: {
                NOME_DA_MUSICA: nome
            }
        });
        res.status(200).json(musica);
    }
}

module.exports = new ControllerMusicas;
