/* eslint-disable no-useless-escape */
import { createReadStream, writeFileSync } from "fs";
import * as readline from "node:readline";
import { callbackify } from "util";

import { __dirname } from "./dirname.js";

export async function loadCsvFile(filename, callback) {
  const filePath = `${__dirname}/../assets/${filename}`;

  const readlineInterface = readline.createInterface({
    input: createReadStream(filePath),
  });
  let count = 0;

  const csvDataArray = [];
  readlineInterface
    .on("line", (line) => {
      if (count > 1) {
        const data = convertsCsvLineToObject(line);
        csvDataArray.push(data);
      }
      count++;
    })
    .on("close", () => {
      callback(csvDataArray);
    });
  return csvDataArray;
}

function convertsCsvLineToObject(line) {
  const csvDataObject = {
    numero_do_alimento: 0,
    descricao_dos_alimentos: "",
    tipo_de_alimento: "",
    energia: 0,
    proteina: 0,
    lipideos: 0,
    carboidrato: 0,
    fibra_alimentar: 0,
  };

  const dataArray = normalizeDataArray(line.trim().split(";"));

  Object.assign(csvDataObject, {
    numero_do_alimento: dataArray[0],
    descricao_dos_alimentos: dataArray[1],
    tipo_de_alimento: dataArray[2],
    energia: dataArray[3],
    proteina: dataArray[4],
    lipideos: dataArray[5],
    carboidrato: dataArray[6],
    fibra_alimentar: dataArray[7],
  });

  return csvDataObject;
}

function normalizeDataArray(array) {
  const normalizedArray = array;
  normalizedArray[0] = Number(array[0]);

  normalizedArray[3] =
    array[3] === "NA" || array[3] === "Tr" || array[3] === "*"
      ? 0
      : Number(array[3]);

  normalizedArray[4] =
    array[4] === "NA" || array[4] === "Tr" || array[4] === "*"
      ? 0
      : parseFloat(array[4].replace(",", "."));

  normalizedArray[5] =
    array[5] === "NA" || array[5] === "Tr" || array[5] === "*"
      ? 0
      : parseFloat(array[5].replace(",", "."));

  normalizedArray[6] =
    array[6] === "NA" || array[6] === "Tr" || array[6] === "*"
      ? 0
      : parseFloat(array[6].replace(",", "."));

  normalizedArray[7] =
    array[7] === "NA" || array[7] === "Tr" || array[7] === "*"
      ? 0
      : parseFloat(array[7].replace(",", "."));
  return normalizedArray;
}
