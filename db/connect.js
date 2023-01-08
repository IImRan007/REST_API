const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDb = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Database Connected Successfully");
};

module.exports = connectDb;
