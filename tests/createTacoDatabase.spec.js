import log from "loglevel";
import sqlite3 from "sqlite3";

describe("taco sqlite test database creation test", () => {
  it("should be able to create the taco test database successfully", () => {
    expect(() => {
      const testDb = new sqlite3.Database("taco-test.db", (err) => {
        if (err) {
          throw new Error(err.message);
        }
        log.info("Test database created successfully");
      });
      testDb.close();
    }).not.toThrowError();
  });
});
