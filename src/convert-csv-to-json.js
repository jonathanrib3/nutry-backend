import { loadCsvFile } from "./load-csv-file.js";

loadCsvFile;

const csv_file = loadCsvFile("taco-tratada.csv");

async function convertCsvToJson() {
  const csvObject = {};

  const readable = new ReadableString(csv_file);

  readable.read();
  readable.pipe();
}
