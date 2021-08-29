const Funcionarios = require('../models/modelsFuncionarios');

class ControllerFuncionarios {

    async index(req,res){
        const resultado = await Funcionarios.findAll();
        res.status(200).json(resultado);
    }

    async show(req, res) {
        const {nome} = req.body;
        const resultado = await Funcionarios.findAll({
            where: {
                Nome: nome
            }
        })
        res.status(200).json(resultado);
    }

    async store(req, res) {
        const {nome, github, linkedin} = req.body;

        const verificando = await Funcionarios.findOne({
            where: {Nome:nome}
        });

        if(verificando) throw new Error("Funcionario já existente")
       
        const novoFuncionario = await Funcionarios.create({Nome:nome, GitHub:github, Linkedin:linkedin});
        
        res.status(201).json(novoFuncionario);
    }

    async update(req,res) {
        const {id,nome, github, linkedin} = req.body
        const resultado = await Funcionarios.update({Nome:nome, GitHub:github, Linkedin:linkedin},{
            where:{
                ID: id
            }
        });
        res.status(200).json(resultado)
    }

    async destroy(req, res){
        const {nome} = req.body;

        const funcionario = await Funcionarios.destroy({
            where: {
                Nome: nome
            }
        });
        res.status(200).json(funcionario);
    }
}

module.exports = new ControllerFuncionarios;
