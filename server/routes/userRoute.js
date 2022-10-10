import express from "express";
const router = express.Router();
import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
// const User = require("../models/userModel")
import jwt from "jsonwebtoken";
import path from "path";

// import bcrypt from 'bcrypt';
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + Math.random() + "-" + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

async function hashPassword(password) {
  return await bcrypt.hashSync(password, 10);
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compareSync(plainPassword, hashedPassword);
}
router.post("/register", upload.single("image"), async (req, res, next) => {
  try {
    const { name, email, password, gender, role } = req.body;
    if (!name || !email || !password || !gender) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    // Check if user exists
    const userExists = await userModel.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    req.body.image = req.file.filename;
    console.log(req.body.image, "akljdfljl");
    const image = req.body.image;
    const hashedPassword = await hashPassword(password);
    console.log(hashPassword);
    const newUser = new userModel({
      image,
      name,
      email,
      password: hashedPassword,
      gender,
      role: role || "user",
    });
    const accessToken = jwt.sign(
      { userId: newUser._id },
      "mynameisahsanmalikiamselfmade",
      {
        expiresIn: "1d",
      }
    );
    newUser.accessToken = accessToken;

    await newUser.save();
    res.json({
      data: newUser,
      accessToken,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return next(new Error("Email does not exist"));
    console.log(password, user.password, "password, user.password");
    const validPassword = await validatePassword(password, user.password);
    if (!validPassword) return next(new Error("Password is not correct"));
    const accessToken = jwt.sign(
      { userId: user._id },
      "mynameisahsanmalikiamselfmade",
      {
        expiresIn: "1d",
      }
    );
    await userModel.findByIdAndUpdate(user._id, { accessToken });
    res.status(200).json({
      data: { name: user.name, email: user.email, role: user.role },
      accessToken,
    });
  } catch (error) {
    next(error);
  }
});
// router.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     User.findOne({ email: email }, (err, user) => {
//       if (user) {
//         if (password === user.password) {
//           res.send({ message: "login sucess", user: user });
//         } else {
//           res.send({ message: "wrong credentials" });
//         }
//       } else {
//         res.send("not register");
//       }
//     });
//   });

router.get("/alluser", async (req, res) => {
  try {
    const user = await userModel.find({});
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});
export default router;
