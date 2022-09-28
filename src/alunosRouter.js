
//Aula 04 - criando rotas 
const express = require('express');
// ROUTER RECEBE TODAS AS FUNÇÕES
const router = express.Router();
router.use(express.json()); //configurando para json
 //req = requisição, a que chega 
 // res = resposta, a que envia
router.get('/', (req, res) =>{
    res.send(` GET ALL `); 
    
 });

router.get('/:id', (req, res) =>{
   res.send(` GET ID: ${req.params.id}`);
});

router.get('/matricula/:matricula', (req, res) =>{
res.send(`GET Matricula: ${req,params, matricula}`);
});

 // ! PUT - ATUALIZA

 router.put('/:id', (req, res) =>{
    res.send(`PUT ID: ${req,body}`);
    });
// ! POST - SALVA
    router.post('/', (req, res) =>{
        res.send(`POST: ${req,body}`);
        }); 
// ! DELETE - DELETA
        router.delete('/:id', (req, res) =>{
            res.send(`DELETE: ${req,params.id}`);
            }); 

module.exports = router;