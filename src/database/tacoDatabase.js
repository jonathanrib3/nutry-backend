import log from "loglevel";
import sqlite3 from "sqlite3";

const tacoDatabase = new sqlite3.Database("taco.db", (err) => {
  if (err) {
    log.error(err.message);
  }
  log.info("Taco database created successfully!");
});

export { tacoDatabase };
