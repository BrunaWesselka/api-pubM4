const Musicas = require('../models/modelsMusica.js');

const CriarMusicas = async (req,res)=>{
    const {NOME_DA_MUSICA,CANTOR,ESTILO} = req.body;

    const novaMusica = await Musicas.create({NOME_DA_MUSICA,CANTOR,ESTILO});

    res.status(201).json(novaMusica);
}

module.exports = CriarMusicas;
