/* eslint-disable no-useless-escape */
import { createReadStream } from "fs";
// eslint-disable-next-line import/no-unresolved
import * as readline from "node:readline";

import { __dirname } from "../dirname.js";

export async function loadCsvData(filename) {
  return new Promise((resolve, reject) => {
    try {
      let count = 0;
      const filePath = `${__dirname}/assets/${filename}`;
      const readlineInterface = getFileReadlineInterface(filePath);
      const csvDataArray = [];
      readlineInterface
        .on("line", (line) => {
          if (count > 0) {
            const data = convertsCsvLineToObject(line);
            csvDataArray.push(data);
          }
          count++;
        })
        .on("close", () => {
          resolve(csvDataArray);
        });
    } catch (exception) {
      console.log(exception);
      const msg = `Something went wrong: \n${exception}`;
      reject(msg);
    }
  });
}

function getFileReadlineInterface(filePath) {
  const readlineInterface = readline.createInterface({
    input: createReadStream(filePath),
  });

  return readlineInterface;
}

function convertsCsvLineToObject(line) {
  const csvDataObject = {
    descricao: "",
    tipo: "",
    energia: 0,
    proteina: 0,
    lipideos: 0,
    carboidrato: 0,
    fibra: 0,
  };

  const dataArray = normalizeDataArray(line.trim().split(";"));

  Object.assign(csvDataObject, {
    descricao: dataArray[0],
    tipo: dataArray[1],
    energia: dataArray[2],
    proteina: dataArray[3],
    lipideos: dataArray[4],
    carboidrato: dataArray[5],
    fibra: dataArray[6],
  });

  return csvDataObject;
}

/*
  Alguns valores da tabela estão abreviados, sendo eles:
  NA: Não Aplicável
  Tr: Traço - Valores com casas decimais imprecisas entre 0 à 0.5mg
  *: Valores serão reavaliados
  Por convenção, defini que para os 3 casos, valor =  0.
*/

function normalizeDataArray(array) {
  const normalizedArray = array;

  normalizedArray[2] =
    array[2] === "NA" || array[2] === "Tr" || array[2] === "*"
      ? 0
      : Number(array[2]);

  normalizedArray[3] =
    array[3] === "NA" || array[3] === "Tr" || array[3] === "*"
      ? 0
      : parseFloat(array[3].replace(",", "."));

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
  return normalizedArray;
}
