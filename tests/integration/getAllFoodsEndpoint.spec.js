// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from "@jest/globals";
import request from "supertest";

import { db } from "../../src/database/tacoDatabase.js";
import { server } from "../../src/http/server.js";
import { tacoRepository } from "../../src/repository/tacoRepository.js";
import { dataArray } from "../dummies/data.js";
import { asyncExec } from "../utils/asyncExec.js";

describe("GET all foods endpoint /taco integration tests", () => {
  beforeAll(async () => {
    await asyncExec("npm run migrate:test");
    await db("taco").del();
    await db("taco").insert(dataArray);
  });

  it("should be able to return valid data from /taco/ endpoint", async () => {
    const limit = 10;
    const page = 1;

    const data = await request(server)
      .get(`/taco/?limit=${limit}&page=${page}`)
      .send();

    expect(data.status).toBe(200);
    expect(data.body).toHaveLength(10);
  });

  it("should be able to return status 400 when empty data is retrieved from /taco/ endpoint", async () => {
    tacoRepository.findAll = jest.fn().mockReturnValue(undefined);

    const data = await request(server).get(`/taco/`).send();

    expect(data.status).toBe(400);
  });

  afterAll(async () => {
    await db("taco").del();
    await db.destroy();
  });
});
