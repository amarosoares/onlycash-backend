const db = require('./db');

exports.createSubscription = async (req, res) => {
  try {
    const { userId, creatorId } = req.body;
    const [result] = await db.execute(
      'INSERT INTO subscriptions (userId, creatorId) VALUES (?, ?)',
      [userId, creatorId]
    );
    res.status(201).json({ message: 'Subscription created', subscriptionId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
