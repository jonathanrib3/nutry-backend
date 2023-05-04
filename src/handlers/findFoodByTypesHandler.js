import { findFoodByTypesUseCase } from "../useCases/findFoodByTypesUseCase.js";

export async function findFoodByTypesHandler(request, response) {
  const { types } = request.body;
  const { limit, page } = request.query;
  const data = await findFoodByTypesUseCase(types, limit, page);

  return response.status(200).send(data);
}
