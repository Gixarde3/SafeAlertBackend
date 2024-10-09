drop database if exists safealert;

create database safealert;

use safealert;

create table reports (
    id int not null auto_increment primary key,
    latitude double not null,
    longitude double not null,
    last_report datetime not null
);

create table victims(
    id int not null auto_increment primary key,
    id_report int not null,
    full_name varchar(100) not null,
    email varchar(100) not null,
    phone varchar(20) not null,
    report text not null,
    foreign key (id_report) references reports(id)
)

create table characteristics(
    id int not null auto_increment primary key,
    id_report int not null,
    characteristic varchar(100) not null,
    foreign key (id_report) references reports(id)
)