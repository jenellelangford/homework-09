USE etracker_db;

INSERT INTO department ( name )
VALUES ( 'Marketing' );

INSERT INTO department ( name )
VALUES ( 'Sales');

INSERT INTO department ( name )
VALUES ( 'Finance');

INSERT INTO department ( name )
VALUES ( 'IT' );

INSERT INTO department ( name )
VALUES ( 'Human Resources' );

INSERT INTO role ( title, salary, department_id )
VALUES ( 'Director', 60000, 'Marketing' );

INSERT INTO role ( title, salary, department_id )
VALUES ( 'Associate', 35000, 'Sales' );

INSERT INTO role ( title, salary, department_id )
VALUES ( 'Coordinator', 60000, 'Finance' );

INSERT INTO role ( title, salary, department_id )
VALUES ( 'Intern', 35000, 'IT' );

INSERT INTO role ( title, salary, department_id )
VALUES ( 'Director', 60000, 'Human Rescources');

INSERT INTO employee ( first_name, last_name, role_id, manager_id )
VALUES ( 'Tom', 'Hanks', 1234 );

INSERT INTO employee ( first_name, last_name, role_id, manager_id )
VALUES ( 'Anne', 'Hathaway', 5363, 8373 );

INSERT INTO employee ( first_name, last_name, role_id, manager_id )
VALUES ( 'Keanu', 'Reeves', 8492, 5463 );

INSERT INTO employee ( first_name, last_name, role_id, manager_id )
VALUES ( 'Meryl' 'Streep', 7483 );

INSERT INTO employee ( first_name, last_name, role_id, manager_id )
VALUES ( 'Reese', 'Witherspoon', 1232, 8392);

INSERT INTO employee ( first_name, last_name, role_id, manager_id )
VALUES ( 'Andy', 'Samberg', 5463 );