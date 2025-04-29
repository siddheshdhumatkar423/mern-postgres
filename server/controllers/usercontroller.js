import { pool } from '../db.js';

export const getServerTime = async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() AS time');
    res.json({ serverTime: result.rows[0].time });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};
