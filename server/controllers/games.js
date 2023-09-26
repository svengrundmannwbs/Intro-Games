import pool from '../db/server.js';

export const getAllGames = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM games');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'something broke' });
  }
};