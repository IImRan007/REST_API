require("dotenv").config();
const connectDb = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require("./products.json");

try {
  connectDb();
  Product.create(ProductJson);
  console.log("success");
} catch (error) {
  console.log(error);
}
