CREATE TABLE aluno(
id integer auto_increment primary key,
nome varchar(100),
matricula varchar(20) unique,
data_nascimento date,
pontuacao integer
);
CREATE TABLE atividade (
id integer auto_increment primary key,
aluno_id integer,
nome varchar(100),
disciplina varchar (100),
nota decimal (10,2),
observacao varchar (255),
FOREIGN KEY (aluno_id) REFERENCES aluno(id)
);

INSERT INTO aluno VALUES 
(default, 'Daniely Vasconcelos', '20212022', '2000-04-13', 0),
(default, 'Lucas Queiroz', '20212045', '2002-09-26', 0),
(default, 'Jonatan ', '20218000', '2000-04-14', 0);