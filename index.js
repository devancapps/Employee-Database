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
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the name of the department?',
        }
    ])
    .then((answer) => {
        return department.add(answer.departmentName);
    })
    .then(() => {
        console.log('Department added successfully.');
        promptUser();
    })
    .catch(err => console.error(err));
}


// Function to add a role
function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the role?',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this role?',
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'What is the department ID for this role?',
        }
    ])
    .then((answers) => {
        return role.add(answers.title, answers.salary, answers.departmentId);
    })
    .then(() => {
        console.log('Role added successfully.');
        promptUser();
    })
    .catch(err => console.error(err));
}


// Function to add an employee
function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'What is the first name of the employee?',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is the last name of the employee?',
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'What is the role ID for this employee?',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the manager ID for this employee? (Enter 0 if no manager)',
        }
    ])
    .then((answers) => {
        const managerId = answers.managerId !== '0' ? answers.managerId : null;
        return employee.add(answers.firstName, answers.lastName, answers.roleId, managerId);
    })
    .then(() => {
        console.log('Employee added successfully.');
        promptUser();
    })
    .catch(err => console.error(err));
}


// Function to update an employee role
function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the ID of the employee whose role you want to update?',
        },
        {
            type: 'input',
            name: 'newRoleId',
            message: 'What is the new role ID for this employee?',
        }
    ])
    .then((answers) => {
        return employee.updateRole(answers.employeeId, answers.newRoleId);
    })
    .then(() => {
        console.log('Employee role updated successfully.');
        promptUser();
    })
    .catch(err => console.error(err));
}


// Start the application
main();
