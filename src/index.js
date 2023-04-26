import express, { json } from "express";

import config from "../config.js";

const app = express();

app.use(json());

app.get("/", (req, res) => {
  return res.status(200).send({ message: "hello world!" });
});

app.listen(config.SERVER_PORT, () => {
  console.log(`server running on http://localhost:${config.SERVER_PORT}`);
});
