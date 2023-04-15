create database MOSYS;

use MOSYS;

create table Examiner{
    examiner_id int(6) primary key,
    examiner_name varchar(20),
    examiner_password varchar(10)
};