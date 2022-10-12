import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    reference: [
      {
        referenceId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "AddProducts",
        },
        name: String,
        noOfItems: Number,

        status: { default: "pending", type: String },
      },
    ],
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    totalprice: Number,
    addedAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("orders", orderSchema);

export default orderModel;
