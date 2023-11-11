const inquirer = require('inquirer');
const cTable = require('console.table');

const Department = require('./lib/Department');
const Role = require('./lib/Role');
const Employee = require('./lib/Employee');

const department = new Department();
const role = new Role();
const employee = new Employee();

const queries = require('./utils/queries');

// Main function that runs the application
function main() {
    console.log('Welcome to the Employee Tracker!');
    promptUser();
}

// Function to prompt the user for actions
function promptUser() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role',
                'Exit'
            ]
        }
    ])
    .then((answers) => {
        switch (answers.action) {
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add a Department':
                addDepartment();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'Add an Employee':
                addEmployee();
                break;
            case 'Update an Employee Role':
                updateEmployeeRole();
                break;
            case 'Exit':
                console.log('Goodbye!');
                process.exit();
            default:
                console.log(`Invalid action: ${answers.action}`);
                promptUser();
        }
    })
    .catch((error) => {
        console.error('Error: ', error);
    });
}

// Function to view all departments
function viewAllDepartments() {
    department.viewAll()
        .then(([rows]) => {
            console.table(rows);
        })
        .then(() => promptUser())
        .catch(err => console.error(err));
}

// Function to view all roles
function viewAllRoles() {
    role.viewAll()
        .then(([rows]) => {
            console.table(rows);
        })
        .then(() => promptUser())
        .catch(err => console.error(err));
}

// Function to view all employees
function viewAllEmployees() {
    employee.viewAll()
        .then(([rows]) => {
            console.table(rows);
        })
        .then(() => promptUser())
        .catch(err => console.error(err));
}

// Function to add a department
function addDepartment() {
    // Prompt for department name and then add it
}

// Function to add a role
function addRole() {
    // Prompt for role details and then add it
}

// Function to add an employee
function addEmployee() {
    // Prompt for employee details and then add them
}

// Function to update an employee role
function updateEmployeeRole() {
    // Prompt to select an employee and their new role, then update it
}

// Start the application
main();
