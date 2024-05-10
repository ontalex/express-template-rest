import { Router } from "express";
import templateControllers from "../../controllers/v1/template.controllers.js";

export const template_routs = Router();

// проверку ролей использовать на этом уровне
template_routs.get("/get", templateControllers.temp_get)