// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from "@jest/globals";

import { tacoRepository } from "../src/repository/tacoRepository.js";
import { fullTextFoodSearchUseCase } from "../src/useCases/fullTextFoodSearchUseCase.js";

describe("find food through full text search use case tests", () => {
  it("should be able to return a result from full text search", async () => {
    const searchString = "Beterraba";
    tacoRepository.searchByFts = jest.fn().mockReturnValue([
      {
        descricao: "Beterraba, cozida",
        tipo: "Verduras, hortaliças e derivados",
        energia: 32,
        proteina: 1.3,
        lipideos: 0.1,
        carboidrato: 7.2,
        fibra: 1.9,
      },
      {
        descricao: "Beterraba, crua",
        tipo: "Verduras, hortaliças e derivados",
        energia: 49,
        proteina: 1.9,
        lipideos: 0.1,
        carboidrato: 11.1,
        fibra: 3.4,
      },
    ]);

    const data = await fullTextFoodSearchUseCase(searchString);

    expect(data).toHaveLength(2);
  });
});
