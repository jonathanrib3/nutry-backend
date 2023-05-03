import { db } from "../src/database/tacoDatabase.js";
import { asyncExec } from "./utils/asyncExec.js";

describe("taco sqlite database seed test", () => {
  it("should be able to run the taco database seed", async () => {
    // Arrange
    await asyncExec("npm run migrate:test");

    // Act
    await asyncExec("npm run seed:test");

    const data = await db("taco").select("*");

    await db.destroy();

    // Assert
    expect(data).toHaveLength(596);
  });
});
