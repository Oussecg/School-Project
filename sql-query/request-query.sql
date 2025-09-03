create table request(
requestId int primary key auto_increment,
requestType varchar(10) not null,
teacherId int,
studentId int,
constraint fk_teacherId foreign key(teacherId) references teachers(teacherId),
constraint fk_studentId foreign key(studentId) references students(studentId)
);
