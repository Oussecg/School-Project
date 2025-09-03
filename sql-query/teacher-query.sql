create table teachers(
teacherId int primary key auto_increment,
teacherFirstName varchar(50) not null,
teacherLastName varchar(50) not null,
teacherUsername varchar(100) unique not null,
teacherPassword varchar(100) not null,
requestDone boolean default false
);