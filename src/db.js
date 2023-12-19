import { createPool } from "mysql2/promise";
import { DBPORT, PASSWORD, DATABASE, HOST, USER } from "./config.js";
import * as dotenv from "dotenv";

export const pool = createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  port: DBPORT,
  database: DATABASE,
});
