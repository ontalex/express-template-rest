import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import template_routs from "./routers/v1/template.routes.js"

import { verifyToken } from "./helpers/middleware/auth.middleware.js";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(express.json());
app.use(cors());

// проверку токенов использовать на этом уровне
app.use('/api/v1/endpoint_1', auth_routs)
app.use('/api/v1/endpoint_2', verifyToken, auth_routs)

app.use('/static', express.static(path.join(__dirname, 'static')))

app.listen(PORT, process.env.SERVER_HOST, () => {
    console.log(`===== SERVER to START =====`);
});