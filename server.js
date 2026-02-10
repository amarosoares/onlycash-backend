const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./authRoutes');
const contentRoutes = require('./contentRoutes');
const subscriptionRoutes = require('./subscriptionRoutes');
const paymentRoutes = require('./paymentRoutes');


const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/subscription', subscriptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`OnlyCash backend rodando na porta ${PORT}`);
});

