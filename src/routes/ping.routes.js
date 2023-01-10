import { Router } from "express";
import { getPing } from "../controllers/ping.controller.js";

export const router = Router();

router.get('/ping', getPing);