import { AppError } from "../errors/AppError.js";
import { tacoRepository } from "../repository/tacoRepository.js";
import { typesExists } from "./utils/typesExists.js";

export async function findFoodByTypesUseCase(types, limit, page) {
  const offset = limit * (page - 1);

  if (!typesExists(types)[0]) {
    throw new AppError(400, "Invalid food type");
  }
  const data = await tacoRepository.findByTypes(types, limit, offset);
  return data;
}
