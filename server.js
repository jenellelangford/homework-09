const mysql = require("mysql");
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "54GD94em@",
  database: "etracker_db"
});

// CONNECT MYSQL AND SQL DATABASE
connection.connect(function(err) {
  if (err) throw err;
  start();
});

// START INQUIRER QUESTIONS
function start() {
  inquirer.prompt ({
    type: 'list',
    name: 'userChoice',
    message: 'What would you like to do?',
    choices: [
    'Add departments',
    'Add roles',
    'Add employees',
    'View departments',
    'View roles',
    'View employees',
    'Update departments',
    'Update roles',
    'Update employees'
    ]}
  )}

  
