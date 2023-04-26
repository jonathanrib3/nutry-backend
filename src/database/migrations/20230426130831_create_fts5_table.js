/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.raw(
    "CREATE VIRTUAL TABLE IF NOT EXISTS taco_fts USING FTS5(descricao, tipo, energia UNINDEXED, proteina UNINDEXED, lipideos UNINDEXED, carboidrato UNINDEXED, fibra UNINDEXED, content='taco', content_rowid='id');"
  );
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// eslint-disable-next-line no-unused-vars
export async function down(knex) {}
