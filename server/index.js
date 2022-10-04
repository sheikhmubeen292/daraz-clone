import express from "express";
import { connectDB } from "./Config/MongoConfig.js";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/userRoute.js";

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// const _dirname = path.resolve();
app.use("uploads", express.static("./uploads"));

app.use("/api/users/", router);

app.listen(port, (req, res) => {
  console.log(`server is strated at port ${port}`);
});
