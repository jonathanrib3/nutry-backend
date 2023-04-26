import knex from "knex";

import knexfile from "../../knexfile.js";

const db = knex(knexfile);

export { db };
