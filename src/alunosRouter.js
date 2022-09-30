//Aula 04 - criando rotas 
const express = require('express');
// ROUTER RECEBE TODAS AS FUNÇÕES

//const Aluno = require('./alunoModel');

const Aluno =  require ('./db');

const router = express.Router();
router.use(express.json()); //configurando para json
 //req = requisição, a que chega 
 // res = resposta, a que envia
router.get('/', async(req, res) =>{
    const alunos = await Aluno.findAll();
    res.send(alunos); 
    
 });

router.get('/:id', async(req, res) =>{
    const alunos = await Aluno.findByPk(req.params.id);
   res.send(alunos);
});

router.get('/matricula/:matricula', async(req, res) =>{
    //busca um objeto e da retorno
   const alunos= await Aluno.findOne({ where:{
        matricula:req.params.matricula 
    }})
    res.send(alunos);
});
// ! POST - SALVA
router.post('/', (req, res) =>{
    res.send(`POST: ${JSON.stringify(req.body)}`); // Json.stringify exibi melhor o resultado no postman


});
 // ! PUT - ATUALIZA

 router.put('/:id', (req, res) =>{
    const alunos = Aluno.create(JSON.parse(req.body));
    res.send(`PUT JSON.stringify(req.body)`);
    
});
 
// ! DELETE - DELETA
        router.delete('/:id', (req, res) =>{
            res.send(`DELETE: ${req.params.id}`);
            }); 

module.exports = router;