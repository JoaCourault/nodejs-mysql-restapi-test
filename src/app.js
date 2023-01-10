import express from "express";
import { router as employeesRoutes } from "./routes/employees.routes.js";
import { router as pingRoutes } from "./routes/ping.routes.js";

export const app = express();

app.use(express.json()); //Permite pasar jsons en el body de los requests.


app.use("/api", pingRoutes);
app.use("/api", employeesRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not Faund'
    })
});
