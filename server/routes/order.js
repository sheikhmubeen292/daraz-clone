import express from "express";
const router = express.Router();
import Order from "../models/OrderModel.js";

router.get("/allorder", async (req, res) => {
  try {
    const user = await Order.find({});
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

router.post("/order", async (req, res) => {
  try {
    const { name, phone, address, reference, totalprice } = req.body;
    console.log(req.body);
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.send("Order Generated Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

export default router;
