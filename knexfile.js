import config from "./config.js";

export default {
  client: "sqlite3",
  connection: {
    filename: config.DB_FILENAME,
  },
  migrations: {
    tableName: "migrations",
    directory: "./src/database/migrations",
  },
  seeds: {
    directory: "./src/database/seeds",
  },
  useNullAsDefault: true,
  pool: { min: 0, max: 3 },
};
