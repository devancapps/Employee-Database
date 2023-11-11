// Employee.js
const connection = require('../db/connection');

class Employee {
    // View all employees
    viewAll() {
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
    }

    // Add a new employee
    add(firstName, lastName, roleId, managerId) {
        return connection.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
    }

    // Update an employee's role
    updateRole(employeeId, newRoleId) {
        return connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employeeId]);
    }
}

module.exports = Employee;
