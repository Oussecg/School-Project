create table admins(
adminId int primary key auto_increment,
adminUsername varchar(100) unique,
adminPassword varchar(100),
adminFirstName varchar(50),
adminLastName varchar(50)
);