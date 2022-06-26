create database test;
use test;
 create table person(
 id_person int auto_increment not null primary key,
 nome varchar(30),
 telefone varchar(30),
 debitos double
 );
 select*from person where debitos >= '100';
 insert into person (nome, telefone, debitos) values ('pedro', '12346','91');
 