-- seeds.sql

-- Use employee_tracker database
USE employee_tracker;

-- Insert sample data into department table
INSERT INTO department (name) VALUES 
('Human Resources'),
('Finance'),
('IT'),
('Sales');

-- Insert sample data into role table
INSERT INTO role (title, salary, department_id) VALUES 
('HR Manager', 70000.00, 1),
('Accountant', 55000.00, 2),
('Software Engineer', 80000.00, 3),
('Sales Representative', 45000.00, 4);

-- Insert sample data into employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Alice', 'Johnson', 3, 1),
('Bob', 'Davis', 4, 1);
