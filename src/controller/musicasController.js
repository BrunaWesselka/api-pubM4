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
                Nome_da_musica: nome
            }
        })
        res.status(200).json(resultado);
    }

    async store(req, res) {
        const {nome, cantor, estilo, link} = req.body;

        const verificando = await Musicas.findOne({
            where: {Nome_da_musica:nome}
        });

        if(verificando) throw new Error("Musica ja existente")
       
        const novaMusica = await Musicas.create({Nome_da_musica:nome, Cantor:cantor, Estilo:estilo, Link:link});
        
        res.status(201).json(novaMusica);
    }

    async update(req,res) {
        const {id,nome, cantor, estilo, link} = req.body
        const resultado = await Musicas.update({Nome_da_musica: nome, Cantor: cantor, Estilo:estilo, Link:link},{
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
                Nome_da_musica: nome
            }
        });
        res.status(200).json(musica);
    }
}

module.exports = new ControllerMusicas;
