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
  REDIS_DATABASE: process.env.REDIS_DATABASE,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  REDIS_USERNAME: process.env.REDIS_USERNAME,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
};
