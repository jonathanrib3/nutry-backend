import { loadCsvData } from "../../../loadCsvData.js";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("taco").del();

  const filename = "taco-tratada (1).csv";
  const tacoData = await loadCsvData(filename);
  const tacoDataBatches = divideDataInBatches(tacoData);

  await knex("taco").insert(tacoDataBatches[0]);
  return knex("taco").insert(tacoDataBatches[1]);
}

function divideDataInBatches(data) {
  const batches = [];

  batches.push(data.slice(0, 499));
  batches.push(data.slice(500, data.length));

  return batches;
}
