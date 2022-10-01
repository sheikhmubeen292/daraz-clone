import express from "express";

import { upload } from "../middleware/multer.js";
import User from "../models/UserModal.js";
import { authUser, authRole } from "../middleware/Auth.js";

const app = express.Router();

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.post("/signup", upload.single("file"), async (req, res) => {
  try {
    req.body.profilePic = req.file.path;
    req.body.role = "user";

    const newUser = new User(req.body);
    await newUser.save();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email, password: password });

    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.get("/dashboard", authUser, (req, res) => {
  res.send("Dashboard Page");
});

app.post("/user-list", authUser, authRole("admin"), async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (e) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default app;
