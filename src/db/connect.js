import dotenv from "dotenv";
import { createPool } from "mysql2";

dotenv.config();

const {
    PG_HOST,
    PG_DB,
    PG_USER,
    PG_PASS
} = process.env;

export const pool = createPool({
    host: PG_HOST,
    user: PG_USER,
    password: PG_PASS,
    database: PG_DB
}).promise()

// Пример подключения
// const [results, fields] = await connection.query("SELECT * FROM `users`;");
// const [results, fields] = await connection.query("SELECT * FROM `users` WHERE `name` = ?;", ["Alex"]);