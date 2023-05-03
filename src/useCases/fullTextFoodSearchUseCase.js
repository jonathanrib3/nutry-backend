import { tacoRepository } from "../repository/tacoRepository.js";

export async function fullTextFoodSearchUseCase(searchString) {
  const data = await tacoRepository.searchByFts(searchString);

  return data;
}
