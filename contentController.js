const db = require('./db');

exports.getAllContent = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM content');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createContent = async (req, res) => {
  try {
    const { title, description, creatorId } = req.body;
    const [result] = await db.execute(
      'INSERT INTO content (title, description, creatorId) VALUES (?, ?, ?)',
      [title, description, creatorId]
    );
    res.status(201).json({ message: 'Content created', contentId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
