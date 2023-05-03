import { fullTextFoodSearchUseCase } from "../useCases/fullTextFoodSearchUseCase.js";

export async function fullTextFoodSearchHandler(request, response) {
  const { s } = request.query;

  const data = await fullTextFoodSearchUseCase(s);

  return response.status(200).send(data);
}
