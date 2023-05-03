import { AppError } from "./AppError.js";

// eslint-disable-next-line no-unused-vars
export async function errorHandler(error, request, response, next) {
  if (error instanceof AppError) {
    return response.status(error.status).send(error.message);
  }
  return response.status(500).send(error.message);
}
