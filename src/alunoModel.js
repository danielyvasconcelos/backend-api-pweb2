const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');
/* ORM*/

const Aluno = db.define(
  'Aluno',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    matricula: {
      type: DataTypes.STRING,
      unique: true,
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
    },
    /*data_cadastro: {
    type: DataTypes.DATEONLY
},*/
    pontuacao: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: 'aluno',
  }
);

module.exports = Aluno;
