const Product = require('../models/productModel');

exports.getProducts = (req, res) => {
  Product.getAllProducts((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.createProduct = (req, res) => {
  const newProduct = req.body;
  Product.addProduct(newProduct, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, ...newProduct });
  });
};
