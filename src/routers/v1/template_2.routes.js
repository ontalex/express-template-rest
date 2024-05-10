import { Router } from "express";
import template_2Controllers from "../../controllers/v1/template_2.controllers.js";

export const template_2_routs = Router();

// проверку ролей использовать на этом уровне
template_2_routs.get("/get", template_2Controllers.temp2_get);