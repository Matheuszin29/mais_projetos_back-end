create database tent character set utf8mb4  collate utf8mb4_unicode_ci ;

use test;


create table person(
 id_person int auto_increment not null primary key,
 nome varchar(30),
 telefone varchar(30),
 debitos double
);

 
select*from person where debitos >= '100';
 
insert into person (nome, telefone, debitos) values ('carlos', '12346','91');
 