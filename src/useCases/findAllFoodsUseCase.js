import { AppError } from "../errors/AppError.js";
import { tacoRepository } from "../repository/tacoRepository.js";

export async function findAllFoodsUseCase(limit, page) {
  const offset = limit * (page - 1);

  const data = await tacoRepository.findAll(limit, offset);

  if (!data) {
    throw new AppError(400, "No data could be retrieved from database");
  }

  return data;
}
