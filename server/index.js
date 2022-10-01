import "dotenv/config";

import express from "express";
import process from "process";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import fs from "fs";
import cors from "cors";

import userRouter from "./routes/Users.js";
import MultiImage from "./routes/General.js";

const { MONGO_URI } = process.env;

async function main() {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  app.use("/uploads", express.static("./uploads"));

  app.use(userRouter);
  app.use(MultiImage);

  await mongoose.connect(MONGO_URI);

  return app;
}

main().then((app) => {
  const PORT = process.env.PORT || 4040;
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});

process.on("uncaughtException", (err, origin) => {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin: ${origin}`
  );
});
