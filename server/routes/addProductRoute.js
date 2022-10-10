import { ProductModal } from "../models/addProductsmodal.js";
import express from "express";

import multer from "multer";

const router = express.Router();

// ----------------- Create Storage folder

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + Math.random() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

//authrization\
const authPage = (permissions) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    console.log(userRole, "userRole");
    if (permissions.includes(userRole)) {
      return next();
    } else {
      return res.status(401).json("you dont have permission");
    }
  };
};
// ----------------------Add producst

router.post(
  "/addproduct",
  upload.array("image", 3),
  //   authPage(["admin"]),
  (req, res) => {
    const imageArray = [];
    try {
      for (let i = 0; i <= req.files.length; i++) {
        imageArray.push(req.files[i].filename);
      }
    } catch (error) {
      console.log(error);
    }
    req.body.image = imageArray;

    console.log(req.body, "bsjk");

    const newProduct = new ProductModal(req.body);

    newProduct
      .save()
      .then(() => res.json("Product Added"))
      .catch((err) => res.status(400).json("Error: " + err));
  }
);

// ----------------------------------get all products

router.get("/allproducts", async (req, res) => {
  try {
    const products = await ProductModal.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

// search products
router.get("/search/:key", async (req, res) => {
  let result = await ProductModal.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
    ],
  });
  res.send(result)
});
router.post("/update", async (req, res) => {
  const { id, star } = req.body;
  // console.log(id, star, "star----->");
  const response = await ProductModal.findByIdAndUpdate(
    { _id: id },
    { $push: { ratings: star } }
  )
    .then((ressponse) => {
      res.json({ ressponse });
    })
    .catch(() => {
      res.json({
        error: error,
      });
    });
});

export default router;
