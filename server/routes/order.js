import express from "express";
const router = express.Router();
import Order from "../models/OrderModel.js";


router.post("/order", async(req, res)=>{
    const {name, phone, address}= req.body

    const newOrder = new Order({name, phone, address})


    try {
     await newOrder.save();
        res.send('Order Generated Successfully');

    } catch (error) {
        return res.status(400).json({message:error})
    }
})
export default router;