import pool from "../db/server.js";

export const getArticles = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM articles;");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};
