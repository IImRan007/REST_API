const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const productRoute = require("./routes/products");

app.get("/", (req, res) => {
  res.send("This is Live from Backend.");
});

// middleware or to set router
app.use("/api/products", productRoute);

const startPort = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Running on port:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startPort();
