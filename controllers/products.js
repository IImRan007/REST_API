const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  // Get all data from database
  const data = await Product.find(req.query);
  res.status(200).json({ data });
};

const getAllProductsTesting = async (req, res) => {
  const data = await Product.find(req.query);
  res.status(200).json({ data });
};

module.exports = { getAllProducts, getAllProductsTesting };
