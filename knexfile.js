import config from "./config.js";

export default {
  client: "sqlite3",
  connection: {
    filename: config.DB_FILENAME,
  },
  migrations: {
    tableName: "migrations",
    directory: "./src/database/knex/migrations",
  },
  seeds: {
    directory: "./src/database/knex/seeds",
  },
  useNullAsDefault: true,
  pool: { min: 0, max: 3 },
};
