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
                Nome_funcionario: nome
            }
        })
        res.status(200).json(resultado);
    }

    async store(req, res) {
        const {nome, salario, turno, idade} = req.body;

        const verificando = await Funcionarios.findOne({
            where: {Nome_funcionario:nome}
        });

        if(verificando) throw new Error("Funcionario já existente")
       
        const novoFuncionario = await Funcionarios.create({Nome_funcionario:nome, Salario_funcionario:salario, Turno_funcionario:turno, Idade_funcionario: idade});
        
        res.status(201).json(novoFuncionario);
    }

    async update(req,res) {
        const {id,nome, salario, turno, idade} = req.body
        const resultado = await Funcionarios.update({Nome_funcionario:nome, Salario_funcionario:salario, Turno_funcionario:turno, Idade_funcionario: idade},{
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
                Nome_funcionario: nome
            }
        });
        res.status(200).json(nome);
    }
}

module.exports = new ControllerFuncionarios;
