create table students(
studentId int primary key auto_increment,
studentFirstName varchar(50) not null,
studentLastName varchar(50) not null,
studentUsername varchar(100) not null unique,
studentPassword varchar(100) not null,
requestDone boolean default false
);