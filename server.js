const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 ROTA DE TESTE (TEM QUE VIR ANTES DAS ROTAS)
app.get('/', (req, res) => {
  res.send('OnlyCash Backend está online 🚀');
});

// Rotas
const authRoutes = require('./authRoutes');
const contentRoutes = require('./contentRoutes');
const paymentRoutes = require('./paymentRoutes');
const subscriptionRoutes = require('./subscriptionRoutes');

app.use('/auth', authRoutes);
app.use('/content', contentRoutes);
app.use('/payments', paymentRoutes);
app.use('/subscriptions', subscriptionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
