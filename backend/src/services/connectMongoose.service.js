const mongoose = require("mongoose");

const conNectMongoose = (uri, callback) => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.log(`MongoDB Connection Error: ${err}`);
    });
  callback();
};

module.exports = conNectMongoose;
