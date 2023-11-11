// queries.js
const connection = require('../db/connection');

const queries = {
    // Fetch all departments
    fetchAllDepartments: () => {
        return connection.promise().query('SELECT * FROM department');
    },

    // Fetch all roles
    fetchAllRoles: () => {
        return connection.promise().query(
            'SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id'
        );
    },

    // Fetch all employees
    fetchAllEmployees: () => {
        return connection.promise().query(
            `SELECT 
                e.id, 
                e.first_name, 
                e.last_name, 
                role.title, 
                department.name AS department, 
                role.salary, 
                CONCAT(m.first_name, ' ', m.last_name) AS manager 
            FROM employee e
            LEFT JOIN role ON e.role_id = role.id
            LEFT JOIN department ON role.department_id = department.id
            LEFT JOIN employee m ON m.id = e.manager_id`
        );
    },

    // Fetch roles for department
    fetchRolesForDepartment: (departmentId) => {
        return connection.promise().query('SELECT id, title FROM role WHERE department_id = ?', [departmentId]);
    },

    // Fetch employees for manager
    fetchEmployeesForManager: (managerId) => {
        return connection.promise().query('SELECT id, first_name, last_name FROM employee WHERE manager_id = ?', [managerId]);
    }
};

module.exports = queries;
