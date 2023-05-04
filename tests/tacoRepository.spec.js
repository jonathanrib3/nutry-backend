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
    const limit = 100;
    const offset = 0;
    const data = await tacoRepository.findByTypes(types, limit, offset);

    expect(data).toHaveLength(8);
  });

  it("should be able page the results from types filter", async () => {
    const types = ["Cereais e derivados"];
    const limit = 5;
    const offset = 0;
    const data = await tacoRepository.findByTypes(types, limit, offset);

    expect(data).toHaveLength(5);
  });

  it("should be able to page the results from all foods", async () => {
    const limit = 10;
    const offset = 0;
    const data = await tacoRepository.findAll(limit, offset);

    expect(data).toHaveLength(10);
  });

  it("should be able to find all foods", async () => {
    const limit = 100;
    const offset = 0;
    const data = await tacoRepository.findAll(limit, offset);

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
