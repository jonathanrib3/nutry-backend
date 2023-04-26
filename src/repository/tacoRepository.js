import { db } from "../database/tacoDatabase.js";
import { typesExists } from "./utils/typesExists.js";

const tacoRepository = {
  findByTypes: async (types) => {
    if (!typesExists(types)[0]) {
      throw new Error("Invalid food type");
    }
    const data = await db("taco").select("*").whereIn("tipo", types);

    return data;
  },
  findAll: async () => {
    const data = await db("taco").select("*");

    return data;
  },

  searchByFts: async (search) => {
    const data = await db.raw(
      "SELECT * FROM taco_fts WHERE taco_fts MATCH ? ORDER BY rank",
      [search]
    );

    return data;
  },
};

export { tacoRepository };
