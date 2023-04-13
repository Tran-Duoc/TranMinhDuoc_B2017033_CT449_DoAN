const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const conNectMongoose = require("./src/services/connectMongoose.service");
const { route } = require("./src/routers/userRouter");
const router = require("./src/routers/userRouter");

app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/v1", router);

const port = process.env.PORT;
const URI = process.env.MONGODB_URI;
conNectMongoose(URI, () => {
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
});
