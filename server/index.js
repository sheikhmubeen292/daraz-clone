import express from "express";
// import ConnectDb from "./Config/MongoConfig";
import { connectDB } from "./Config/MongoConfig.js";
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log(`server is strated at port ${port}`);
});
