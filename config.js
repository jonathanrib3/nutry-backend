import dotenv from "dotenv";
import path from "path";

import { __dirname } from "./dirname.js";

dotenv.config({
  path: path.resolve(
    __dirname,
    `./.${process.env.NODE_ENV || "development"}.env`
  ),
});

export default {
  NODE_ENV: process.env.NODE_ENV,
  SERVER_PORT: process.env.SERVER_PORT,
  DB_FILENAME: process.env.DB_FILENAME,
};
