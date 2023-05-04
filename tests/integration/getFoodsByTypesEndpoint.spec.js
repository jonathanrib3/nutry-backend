import request from "supertest";

import { db } from "../../src/database/tacoDatabase.js";
import { server } from "../../src/http/server.js";
import { dataArray } from "../dummies/data.js";
import { asyncExec } from "../utils/asyncExec.js";

describe("GET all foods endpoint /taco integration tests", () => {
  beforeAll(async () => {
    await asyncExec("npm run migrate:test");
    await db("taco").del();
    await db("taco").insert(dataArray);
  });

  it("should be able to return valid data from /taco/filterByType endpoint", async () => {
    const limit = 10;
    const page = 1;
    const data = await request(server)
      .get(`/taco/filterByType/?limit=${limit}&page=${page}`)
      .send({ types: ["Verduras, hortaliças e derivados"] });

    expect(data.status).toBe(200);
    expect(data.body).toHaveLength(8);
  });

  it("should be able to return status 400 when invalid type is passed as input from /taco/filterByType endpoint", async () => {
    const limit = 10;
    const page = 1;

    const data = await request(server)
      .get(`/taco/filterByType/?limit=${limit}&page=${page}`)
      .send({ types: ["Verduras, hortaliças e deriv"] });

    expect(data.status).toBe(400);
  });

  afterAll(async () => {
    await db("taco").del();
    await db.destroy();
  });
});
