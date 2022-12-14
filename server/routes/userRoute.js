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
    const { name, email, password, gender, role,option } = req.body;
    if (!name || !email || !password || !gender || !option) {
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
      option
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
    // console.log(password, user.password, "password, user.password");
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
      data: { name: user.name, email: user.email, role: user.role, id:user._id },
      accessToken,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/alluser", async (req, res) => {
  try {
    const user = await userModel.find({});
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

// --------------------------------get user by id

router.get("/getUserprofile/:id", async(request, response)=>{
  userModel.findOne({ where: { userId: request.params.id } }).then(user => {
    if (user === null) {
      response.status(401).json({
        message: "Invalid credentials!",
      });
    } else {
      response.status(200).json({
        userProfile: user
      });
    }
  }).catch(error => {
    response.status(500).json({
      message: "Something went wrong!",
    });
  });
})
//create profile
router.post("/userprofile/:id", async(req, res)=>{
  try {
    userModel.findOne({ where: { userId: req.params.id } }).then(user => {
      if (user !== null) {
          const userprofileId = user.id;
          const image = req.file?.path ? req.file.path : '';
          const { gender, name, email } = req.body
          return userModel
            .findOne(userprofileId)
            .then((userprofile) => {
              userprofile.update({
                gender: gender !==userprofile.gender?gender:userprofile.gender,
                name: name !==userprofile.name?name:userprofile.name,
                email: email !==userprofile.email?email:userprofile.email,
                image: image || userprofile.image
              })
                .then((updatedUserprofile) => {
                  res.status(200).send({
                    message: 'User-profile Updated Successfully',
                    data: {
                      gender: gender || updatedUserprofile.gender,
                      name: name || updatedUserprofile.name,
                      email: email || updatedUserprofile.email,
                      image: image || updatedUserprofile.image
                    }
                  })
                })
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
      } else {
        const userId = req.params.id;
        const image = req.file?.path? req.file.path:""
        const { gender, name, email } = req.body;
        const users = Userprofile.create({
          gender: gender,
          name: name,
          email: email,
          image: image,
          userId: userId
        });
        return res
          .status(200)
          .json({ status: 200, message: 'User-Profile Created Successfully', users });
      }
    })
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
});

//  --------------------------- Delete user

router.post("/delete", (req, res) => {
  const { _id } = req.body;

  userModel
    .findByIdAndDelete(_id)
    .then(() => {
      res.status(201).json({ messege: "User Deleted" });
    })
    .catch((error) => {
      console.log(error);
    });
});

// --------------------update user
router.put("/update/:id", async (req, res) => {
  try {
    await userModel.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.json({ success: true, message: "Successfully Updated!" });
  } catch (error) {
    console.log("err", error);
  }
});

// To Update The Employee Details
//  employeeRoute.route('/updateEmployee/:id').post(function (req, res) {
//   employeeModel.findById(req.params.id, function (err, employee) {
//   if (!employee)
//   return next(new Error('Unable To Find Employee With This Id'));
//   else {
//   employee.firstName = req.body.firstName;
//   employee.lastName = req.body.lastName;
//   employee.email = req.body.email;
//   employee.phone = req.body.phone;

//   employee.save().then(emp => {
//   res.json('Employee Updated Successfully');
//   })

export default router;
