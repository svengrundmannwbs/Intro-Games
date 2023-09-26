import pool from "../db/server.js";

export const getImages = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM images;");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};

export const getImageById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM images WHERE id = $1;", [
      id,
    ]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};

export const addImage = async (req, res) => {
  const { url, game_id, article_id } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO images (url, game_id, article_id) VALUES ($1, $2, $3) RETURNING *;",
      [url, game_id, article_id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "something broke" });
  }
};

export const updateImage = async (req, res) => {
  const { id } = req.params;
  const { url, game_id, article_id } = req.body;
  try {
    const result = await pool.query(
      "UPDATE images SET url = $1, game_id = $2, article_id = $3 WHERE id = $4 RETURNING *;",
      [url, game_id, article_id, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "something broke" });
    console.log(err);
  }
};

export const deleteImage = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM images WHERE ID = $1;", [id]);
    res.status(200).json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ message: "something broke" });
    console.log(err);
  }
};
