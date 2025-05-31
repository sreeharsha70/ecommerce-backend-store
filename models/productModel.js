const db = require('../config/db');

const getAllProducts = (callback) => {
  db.query('SELECT * FROM products', callback);
};

const addProduct = (product, callback) => {
  db.query('INSERT INTO products SET ?', product, callback);
};

module.exports = {
  getAllProducts,
  addProduct
};
