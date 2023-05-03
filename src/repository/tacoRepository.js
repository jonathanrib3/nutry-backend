import { db } from "../database/tacoDatabase.js";

const tacoRepository = {
  findByTypes: async (types, limit, offset) => {
    const data = await db("taco")
      .select("*")
      .whereIn("tipo", types)
      .limit(limit)
      .offset(offset);
    return data;
  },
  findAll: async (limit, offset) => {
    const data = await db("taco").select("*").limit(limit).offset(offset);

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
