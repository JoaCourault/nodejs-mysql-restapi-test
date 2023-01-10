import { pool } from '../db.js';

export const getEmployees = async (req, res) => {
    try {
        // throw new Error('My Error D:');
        const employees = await pool.query('SELECT * FROM employee');
        if (employees[0].length > 0) res.json(employees[0]);
        else res.status(404).json({ messaje: 'There are not Employees' });
    } catch (err) {
        res.status(500).json({ messaje: 'Something goes wrong D:' });
    }
}
export const getEmployeeById = async (req, res) => {
    try {
        const employee = await pool.query('SELECT * FROM employee WHERE id = (?);', [req.params.id]);
        if (employee[0].length > 0) res.json(employee[0][0]);
        else res.status(404).json({ messaje: 'Employee not faund' });
    } catch (err) {
        res.status(500).json({ messaje: 'Something goes wrong D:' });
    }
}
export const createEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?);', [req.body.name, req.body.salary]);
        res.send({
            id: rows.insertId,
            name: req.body.name,
            salary: req.body.salary
        })
    } catch (err) {
        res.status(500).json({ messaje: 'Something goes wrong D:' });
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, salary } = req.body;
        const updated = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, name) WHERE id = ?', [name, salary, id])
        if (updated[0].affectedRows !== 0) res.json({ id: id, name: name, salary: salary });
        else res.status(404).json({ messaje: 'User not faund :(' });
    } catch (err) {
        res.status(500).json({ messaje: 'Something goes wrong D:' });
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const deleted = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);
        if (deleted[0].affectedRows !== 0) res.sendStatus(204); // Si encontró lo que tenia que encontrar pero simplemente no devuelve nada.
        else res.status(404).json({ messaje: 'Employee not faund :(' });
    } catch (err) {
        res.status(500).json({ messaje: 'Something goes wrong D:' });
    }
};