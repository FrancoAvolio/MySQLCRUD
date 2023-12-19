CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(15) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL
    PRIMARY KEY (id)
);

DESCRIBE employee;


INSERT INTO employee VALUES 

    (1, "John", 1000),
    (2, "Candela", 4000),
    (3, "Jacinto", 7000),
    (4, "Pepita", 10000);