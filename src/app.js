const express = require ('express');
const alunoRouter = require('./alunosRouter'); //importando um arquivo 

const app = express();
app.use(express.json());

app.use('/alunos', alunoRouter);

/*app.get('/teste',(req, res) => {
res.send('bom dia'); // vai enviar os dados para a tela
} ) //configurando uma rota, não é a melhor pratica*/


app.listen(3000,async ()=> {
    const resultDb = await database.sync({alter: true});
    console.log(`db: ${resultDb}`);
    console.log('server started');
})
