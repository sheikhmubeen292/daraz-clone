import express from "express";
import { connectDB } from "./Config/MongoConfig.js";
<<<<<<< HEAD
import addProdutRoute from "./routes/addProductRoute.js";
import cors from "cors";
const app = express();

const port = process.env.PORT || 5000;
app.use("/uploads", express.static("./uploads"));
app.use(express.json());
app.use(cors());

app.use("/api/products", addProdutRoute);
=======
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/userRoute.js";
import path from "path"
// const userRoute = require("./routes/userRout");
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const _dirname = path.resolve();
app.use("uploads", express.static(path.join(_dirname, "uploads")));
>>>>>>> 4efeec53471d92b640489366e49b66274c8d7284

app.use("/api/users/", router);
app.listen(port, (req, res) => {
  console.log(`server is strated at port ${port}`);
});
