// Department.js
const connection = require('../db/connection');

class Department {
    // View all departments
    viewAll() {
        return connection.promise().query('SELECT * FROM department');
    }

    // Add a new department
    add(name) {
        return connection.promise().query('INSERT INTO department (name) VALUES (?)', [name]);
    }
}

module.exports = Department;
