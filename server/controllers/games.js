import pool from "../db/server.js";

export const getAllGames = async (req, res) => {
  let sort = req.query.sort;
  let orderBy = "";
  if (sort) {
    orderBy = sort.slice(-1);
    sort = sort.slice(0, -1);
    if (orderBy === "d") {
      orderBy = `ORDER BY ${sort} DESC;`;
    } else if (orderBy === "a") {
      orderBy = `ORDER BY ${sort} ASC;`;
    }
  }
  let queryString = `SELECT g.id, g.name , g.publisher, g.release_year, g.rating, json_agg(json_build_object('url', images.url)) AS images FROM  games AS g JOIN images ON g.id = images.game_id WHERE g.favorite = true GROUP  BY g.id, g.name ${orderBy}`;
  try {
    const result = await pool.query(queryString);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};
