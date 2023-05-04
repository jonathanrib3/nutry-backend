import { Router } from "express";

import { findAllFoodsHandler } from "../../handlers/findAllFoodsHandler.js";
import { findFoodByTypesHandler } from "../../handlers/findFoodByTypesHandler.js";
import { fullTextFoodSearchHandler } from "../../handlers/fullTextFoodSearchHandler.js";

const tacoRoutes = Router();

tacoRoutes.get("/taco/", findAllFoodsHandler);
tacoRoutes.get("/taco/filterByType/", findFoodByTypesHandler);
tacoRoutes.get("/taco/search/", fullTextFoodSearchHandler);

export { tacoRoutes };
