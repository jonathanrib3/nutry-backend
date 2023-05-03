/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/*
CREATE TRIGGER taco_ai AFTER INSERT ON taco 
BEGIN 
  INSERT INTO taco_fts (rowid, descricao, tipo, energia, proteina, lipideos, carboidrato, fibra) 
  VALUES (new.id, new.descricao, new.tipo, new.energia, new.proteina, new.lipideos, new.carboidrato, new.fibra); 
END;
*/
export async function up(knex) {
  return knex.schema.raw(
    "CREATE TRIGGER taco_ai AFTER INSERT ON taco BEGIN INSERT INTO taco_fts (rowid, descricao, tipo, energia, proteina, lipideos, carboidrato, fibra) VALUES (new.id, new.descricao, new.tipo, new.energia, new.proteina, new.lipideos, new.carboidrato, new.fibra); END;"
  );
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.raw("DROP TRIGGER taco_ai");
}
