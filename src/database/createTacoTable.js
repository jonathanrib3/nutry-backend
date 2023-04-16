import log from "loglevel";

import { tacoDatabase } from "./tacoDatabase.js";

export async function createTacoTable() {
  try {
    await tacoDatabase.run(
      "CREATE TABLE taco(id INTEGER PRIMARY KEY, descricao TEXT, tipo TEXT, energia INTEGER, proteina REAL, lipideos REAL, carboidrato REAL, fibra_alimentar REAL"
    );
  } catch (err) {
    log.error("Something went wrong and we could not create the taco table :/");
    log.error(err.message);
    throw new Error(err.message);
  }
  log.info("Taco table created successfully");
}

// Número do Alimento;Descrição dos alimentos;Tipo de Alimento;Energia(kcal);
// Proteína(g);Lipídeos(g);Carboidrato(g);Fibra Alimentar(g)
