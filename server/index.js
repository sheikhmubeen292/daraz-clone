import express from "express";
import { connectDB } from "./Config/MongoConfig.js";
import addProdutRoute from "./routes/addProductRoute.js";
import cors from "cors";
const app = express();

const port = process.env.PORT || 5000;
app.use("/uploads", express.static("./uploads"));
app.use(express.json());
app.use(cors());

app.use("/api/products", addProdutRoute);

app.listen(port, (req, res) => {
  console.log(`server is strated at port ${port}`);
});
