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
  it("should be able to retrieve results matching the search from /taco/search/ endpoint", async () => {
    const search = "pão";

    const data = await request(server).get(`/taco/search/?s=${search}`);

    expect(data.status).toBe(200);
    expect(data.body).toHaveLength(4);
  });

  afterAll(async () => {
    await db("taco").del();
    await db.destroy();
  });
});
