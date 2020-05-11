const mysql = require("mysql");
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "MyNewPass",
  database: "etracker_db",
  insecureAuth: true
});

// CONNECT MYSQL AND SQL DATABASE
connection.connect(function(err) {
  if (err) throw (err);
  start();
});

// START INQUIRER QUESTIONS
function start() {
  inquirer.prompt({
      name: "userChoice",
      type: "list",
      message: "What would you like to do?",
      choices: [
      'Add departments',
      'Add roles',
      'Add employees',
      'View departments',
      'View roles',
      'View employees',
      'Update departments',
      'Update roles',
      'Update employees',
      'EXIT' ]
    }).then 
    switch(response) {
      case (response.userChoice === 'Add departments'):
      addDepartment();
      break;
      case (response.userChoice === 'Add roles'):
      addRole();
      break;
      case (response.userChoice === 'Add employees'):
      addEmployee();
      break;
      case (response.userChoice === 'View departments'):
      viewDepartments();
      break;
      case (response.userChoice === 'View roles'):
      viewRoles();
      break;
      case (response.userChoice === 'View employees'):
      viewEmployees();
      break;
      case (response.userChoice === 'Update departments'):
      updateDepartments();
      break;
      case (response.userChoice === 'Update roles'):
      updateRoles();
      break;
      case (response.userChoice === 'Update employees'):
      updateEmployees();
      break;
      default:
      text = 'See you next time!';
    }
  };

// FUNCTION FOR ADDING NEW DEPARTMENT 
function addDepartment() {
  inquirer.prompt([
    {
      name: 'departmentName',
      type: 'input',
      message: 'What is the name of the department you would like to add?'
    }
  ]).then (response => {
    connection.query(
      'INSERT INTO etracker_db SET ?',
      {
        name: response.departmentName
      },
      function(err) {
        if (err) throw (err);
        console.log('Your department has been added!');
        start();
      })
  })
};

// FUNCTION FOR ADDING NEW ROLE
function addRole() {
  inquirer.prompt([
    {
      name: 'roleName',
      type: 'input',
      message: 'What is the title of the role you would like to add?'
    },
    {
      name: 'roleSalary',
      type: 'input',
      message: 'What is the salary of this role?'
    },
    {
      name: 'roleId',
      type: 'input',
      message: 'What is the ID of the department your new role belongs to?'
    }
  ]).then (response => {
    connection.query(
      'INSERT INTO etracker_db SET ?',
      {
        title: response.roleName,
        salary: response.roleSalary,
        department_id: response.roleId
      },
      function(err) {
        if (err) throw (err);
        console.log('Your role has been added!');
        start();
      })
  })
};

// FUNCTION FOR ADDING NEW EMPLOYEE
function addEmployee() {
  inquirer.prompt([
    {
      name: 'employeeFirstName',
      type: 'input',
      message: 'What is the first name of the employee you would like to add?'
    },
    {
      name: 'employeeLastName',
      type: 'input',
      message: 'What is the last name of the employee you would like to add?'
    },
    {
      name: 'employeeId',
      type: 'input',
      message: 'What is the role ID your new employee belongs to?'
    },
    {
      name: 'managerId',
      type: 'input',
      message: 'What is the manager ID of your new employee (if applicable)?'
    },
  ]).then (response => {
    connection.query(
      'INSERT INTO etracker_db SET ?',
      {
        first_name: response.employeeFirstName,
        last_name: response.employeeLastName,
        role_id: response.employeeId,
        manager_id: response.managerId
      },
      function(err) {
        if (err) throw (err);
        console.log('Your new employee has been added!');
        start();
      })
  })
};
/*
// FUNCTION FOR UPDATING DEPARTMENT
function updateDepartments() {
  const query = connection.query('UPDATE etracker_db SET ? WHERE ?', function(err, results) {
    if (err) throw (err);
    inquirer.prompt ([
      {
        name: 'updateChoice',
        type: 'rawlist',
        choices: function() {
          const choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push(results[i].name);
          }
          return choiceArray;
        },
        message: 'What department would you like to update?'
      },
      {
        name: 'departmentChoice',
        type: 'input',
        message: 'What would you like to rename this department?'
      }
    ]).then (function(answer) {
      let chosenDept;
      for (var i = 0; i < results.length; i++) {
        if (results[i].name === answer.updateChoice) {
          chosenDept = results[i];
        }
      }
    })
  }
)};

*/
