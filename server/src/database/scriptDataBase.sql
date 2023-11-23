create database project_jwt;
use project_jwt;

create table login(
	username varchar(50) not null,
    password varchar(50) not null,
    primary key(username, password)
);

INSERT INTO login (username, password) VALUES
    ('usuario1', 'contraseña1'),
    ('usuario2', 'contraseña2'),
    ('usuario3', 'contraseña3'),
    ('usuario4', 'contraseña4'),
    ('usuario5', 'contraseña5');
