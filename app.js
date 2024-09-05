const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

application.use('/products', productRoutes);
application.use('/orders, orderRoutes');

module.exports = app;