/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable("taco", (table) => {
    table.increments("id");
    table.string("descricao");
    table.string("tipo");
    table.integer("energia");
    table.float("proteina");
    table.float("lipideos");
    table.float("carboidrato");
    table.float("fibra");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable("taco");
}
