/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/*
CREATE TRIGGER taco_au AFTER UPDATE ON taco 
BEGIN 
  INSERT INTO taco_fts (taco_fts, rowid, descricao, tipo, energia, proteina, lipideos, carboidrato, fibra)
  VALUES ('delete', old.id, old.descricao, old.tipo, old.energia, old.proteina, old.lipideos, old.carboidrato, old.fibra);
  INSERT INTO taco_fts (rowid, descricao, tipo, energia, proteina, lipideos, carboidrato, fibra)
  VALUES (new.id, new.descricao, new.tipo, new.energia, new.proteina, new.lipideos, new.carboidrato, new.fibra);
END;
*/
export async function up(knex) {
  return knex.schema.raw(
    "CREATE TRIGGER taco_au AFTER UPDATE ON taco BEGIN INSERT INTO taco_fts (taco_fts, rowid, descricao, tipo, energia, proteina, lipideos, carboidrato, fibra)VALUES ('delete', old.id, old.descricao, old.tipo, old.energia, old.proteina, old.lipideos, old.carboidrato, old.fibra);INSERT INTO taco_fts (rowid, descricao, tipo, energia, proteina, lipideos, carboidrato, fibra)VALUES (new.id, new.descricao, new.tipo, new.energia, new.proteina, new.lipideos, new.carboidrato, new.fibra);END;"
  );
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.raw("DROP TRIGGER taco_au");
}
