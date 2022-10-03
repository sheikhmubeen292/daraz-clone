import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    image: [
      {
        type: String,
        required: true,
      },
    ],
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    Qauntity: {
      type: Number,
      required: true,
    },

    ratings: [Number],
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductModal = new mongoose.model("AddProducts", productSchema);

export { ProductModal };
