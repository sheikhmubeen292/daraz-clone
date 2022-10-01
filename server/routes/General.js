import express from "express";

import { upload } from "../middleware/multer.js";
import { authUser } from "../middleware/Auth.js";
import MultiImage from "../models/MultiImage.js";
import mongoose from "mongoose";

const app = express.Router();

app.get("/dashboard", authUser, (req, res) => {
  res.send("Dashboard Page");
});

app.post("/mulitple-images", upload.array("images", 5), async (req, res) => {
  try {
    const reqFiles = [];
    for (var i = 0; i < req.files.length; i++) {
      reqFiles.push(req.files[i].path);
    }
    const userImages = new MultiImage({
      _id: new mongoose.Types.ObjectId(),
      multiImage: reqFiles,
    });
    await userImages.save();
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.get("/multi-image-data", async (req, res) => {
  try {
    let images = await MultiImage.find({});
    res.json(images);
  } catch (e) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default app;
