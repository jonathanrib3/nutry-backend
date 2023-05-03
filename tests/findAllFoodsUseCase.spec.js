// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from "@jest/globals";

import { tacoRepository } from "../src/repository/tacoRepository.js";
import { findAllFoodsUseCase } from "../src/useCases/findAllFoodsUseCase.js";
import { dataArray } from "./dummies/data.js";

describe("find all foods use case tests", () => {
  it("should be able to return all data from repository", async () => {
    tacoRepository.findAll = jest.fn().mockResolvedValue(dataArray);

    const data = await findAllFoodsUseCase();

    expect(data).toHaveLength(16);
  });
  it("should be able to throw an exception if no data is retrieved from repository", async () => {
    tacoRepository.findAll = jest.fn().mockResolvedValue(undefined);

    expect(async () => {
      await findAllFoodsUseCase();
    }).rejects.toThrow("No data could be retrieved from database");
  });
});
