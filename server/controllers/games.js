import pool from '../db/server.js';

export const getAllGames = async (req, res) => {
  try {
    const result = await pool.query("SELECT g.id, g.name , g.publisher, g.release_year, g.rating, json_agg(json_build_object('url', images.url)) AS images FROM  games AS g JOIN images ON g.id = images.game_id WHERE g.favorite = true GROUP  BY g.id, g.name ;");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};