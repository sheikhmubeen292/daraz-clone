import express from "express";
import { connectDB } from "./Config/MongoConfig.js";
import addProdutRoute from "./routes/addProductRoute.js";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/userRoute.js";

const app = express();

const port = process.env.PORT || 5000;
app.use("/uploads", express.static("./uploads"));
app.use(express.json());
app.use(cors());

app.use("/api/products", addProdutRoute);

app.use(bodyParser.urlencoded({ extended: true }));

// const _dirname = path.resolve();

app.use("/api/users/", router);

app.listen(port, (req, res) => {
  console.log(`server is strated at port ${port}`);
});
