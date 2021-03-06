DROP DATABASE IF EXISTS etracker_db;
CREATE DATABASE etracker_db;

USE etracker_db;

CREATE TABLE department (
  id INTEGER (30) NOT NULL AUTO_INCREMENT,
  name VARCHAR (30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role (
  id INTEGER(30) NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE employee (
  id INTEGER(30) NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER(30) NOT NULL,
  manager_id INTEGER,
  PRIMARY KEY(id)
);


SELECT * FROM etracker;