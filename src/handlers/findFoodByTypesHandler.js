import { findFoodByTypesUseCase } from "../useCases/findFoodByTypesUseCase.js";

export async function findFoodByTypesHandler(request, response) {
  const { types } = request.body;

  const data = await findFoodByTypesUseCase(types);

  return response.status(200).send(data);
}
