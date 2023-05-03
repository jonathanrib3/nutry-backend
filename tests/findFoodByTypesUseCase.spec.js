// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from "@jest/globals";

import { tacoRepository } from "../src/repository/tacoRepository.js";
import { findFoodByTypesUseCase } from "../src/useCases/findFoodByTypesUseCase.js";
import { dataArray } from "./dummies/data.js";

describe("find all foods by types use case tests", () => {
  it("should be able to return all foods from some given types from repository", async () => {
    const typeArray = ["Verduras, hortaliças e derivados"];
    tacoRepository.findByTypes = jest
      .fn()
      .mockImplementation(() =>
        dataArray.filter((food) => food.tipo === typeArray[0])
      );

    const data = await findFoodByTypesUseCase(typeArray);

    expect(data).toHaveLength(8);
  });
  it("should be able to throw an error when an invalid type of food is passed as input", async () => {
    const typeArray = ["Verduras, hortaliças e"];
    tacoRepository.findByTypes = jest.fn().mockResolvedValue(undefined);
    expect(async () => {
      await findFoodByTypesUseCase(typeArray);
    }).rejects.toThrow("Invalid food type");
  });
});
