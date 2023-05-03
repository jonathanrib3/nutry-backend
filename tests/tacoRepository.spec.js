import { db } from "../src/database/tacoDatabase.js";
import { tacoRepository } from "../src/repository/tacoRepository.js";
import { dataArray } from "./dummies/data.js";
import { asyncExec } from "./utils/asyncExec.js";

describe("taco repository functions tests", () => {
  beforeAll(async () => {
    await asyncExec("npm run migrate:test");
    await db("taco").del();
    await db("taco").insert(dataArray);
  });

  it("should be able to find all foods from a given valid type", async () => {
    const types = ["Cereais e derivados"];
    const data = await tacoRepository.findByTypes(types);

    expect(data).toHaveLength(8);
  });

  it("should be able to find all foods", async () => {
    const data = await tacoRepository.findAll();

    expect(data).toHaveLength(16);
  });

  it("should be able to search partially for a food and find similar results", async () => {
    const search = "Berinjela";
    const data = await tacoRepository.searchByFts(search);

    expect(data).toHaveLength(2);
  });

  afterAll(async () => {
    await db("taco").del();
    await db.destroy();
  });
});
