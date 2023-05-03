import express, { json } from "express";
import "express-async-errors";

import { errorHandler } from "../errors/errorHandler.js";
import { tacoRoutes } from "./routes/taco.routes.js";

const server = express();

server.use(json());
server.use(tacoRoutes);
server.use(errorHandler);

export { server };
