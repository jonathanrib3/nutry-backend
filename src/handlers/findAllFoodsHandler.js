import { findAllFoodsUseCase } from "../useCases/findAllFoodsUseCase.js";

export async function findAllFoodsHandler(request, response) {
  const { limit, page } = request.query;
  const data = await findAllFoodsUseCase(limit, page);

  return response.status(200).send(data);
}
