create database if not exists companydb;
use companydb;

create table employee (
    id int not null auto_increment,
    name varchar(45) default null,
    salary int default null,
    primary key (id)
);

show tables;

describe employee;

insert into employee values 
(1, 'Joe', 1000),
(2, 'Henry', 2000),
(3, 'Sam', 2500),
(4, 'Max', 1500);