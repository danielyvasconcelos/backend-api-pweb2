const { Sequelize } = require('sequelize');


const dbSequelize = new Sequelize('aluno', 'root', '921526', {
    dialect:'mysql', host:'localhost'
});

module.exports = dbSequelize ;