import express, { json } from "express";
import { writeFileSync } from "fs";

import { tacoDatabase } from "./database/tacoDatabase.js";
import { __dirname } from "./dirname.js";
import { loadCsvFile } from "./load-csv-file.js";

const app = express();

app.use(json());

app.get("/", (req, res) => {
  return res.status(200).send({ message: "hello world!" });
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});

loadCsvFile("taco-tratada (1).csv", (result) => {
  const jsonContent = JSON.stringify(result);
  writeFileSync(`${__dirname}/../assets/taco.json`, jsonContent, (err) => {
    throw new Error(err.message);
  });
});

const db = tacoDatabase;

// db.run("CREATE TABLE teste(atributo1 TEXT, atributo2 NUMERIC)")

// const sql = 'SELECT * FROM teste'
// db.all(sql,[], (err, rows) => {
//   if (err) {
//     return console.error(err.message)
//   }
//   console.log(rows)
// })

db.close();
