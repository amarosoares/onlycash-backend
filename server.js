const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./authRoutes');
const contentRoutes = require('./contentRoutes');
const paymentRoutes = require('./paymentRoutes');
const subscriptionRoutes = require('./subscriptionRoutes');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/content', contentRoutes);
app.use('/payments', paymentRoutes);
app.use('/subscriptions', subscriptionRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

