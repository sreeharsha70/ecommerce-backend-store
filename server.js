const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();
require('./config/db');

app.use(express.json());
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
