const db = require('./db');

exports.createPayment = async (req, res) => {
  try {
    const { userId, amount, method } = req.body;
    const [result] = await db.execute(
      'INSERT INTO payments (userId, amount, method) VALUES (?, ?, ?)',
      [userId, amount, method]
    );
    res.status(201).json({ message: 'Payment created', paymentId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
