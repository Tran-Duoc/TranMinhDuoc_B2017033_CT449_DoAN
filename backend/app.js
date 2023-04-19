const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
const connect = require("./src/services/connect.service");

const userRouter = require("./src/routers/userRouter");
const blogRouter = require("./src/routers/blogRouter");

app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/item", blogRouter);

const PORT = 8000;
const MONGOOSE_URI = process.env.MONGOOSE_URI;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connect(MONGOOSE_URI);
});
