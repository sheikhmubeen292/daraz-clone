import express from "express";
import { connectDB } from "./Config/MongoConfig.js";
import addProdutRoute from "./routes/addProductRoute.js";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/userRoute.js";
import order from "./routes/order.js";
import path from "path";
import url from "url";
// import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const port = process.env.PORT || 5000;

app.use("/uploads", express.static("./uploads"));
app.use(express.static("./build"));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/products", addProdutRoute);

app.use("/api/order/", order);

app.use("/api/users/", router);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"), function (err) {
    if (err) {
      res.status(500).send(err, { error: "server Error" });
    }
  });
});
app.listen(port, (req, res) => {
  console.log(`server is strated at port ${port}`);
});
