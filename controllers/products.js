const getAllProducts = async (req, res) => {
  res.status(200).json({ message: "Get All Products" });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ message: "Get All Products For Testing" });
};

module.exports = { getAllProducts, getAllProductsTesting };
