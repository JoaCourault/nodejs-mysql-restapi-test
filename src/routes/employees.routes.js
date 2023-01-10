import { Router } from "express";
import { createEmployees, deleteEmployee, getEmployeeById, getEmployees, updateEmployee } from "../controllers/employees.controller.js";
export const router = Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployeeById)
router.post('/employees', createEmployees);
router.patch('/employees/:id', updateEmployee); // Actualiza parcialmente.
router.delete('/employees/:id', deleteEmployee);

// export default router;