import mongoose from "mongoose";

const multiImage = new mongoose.Schema({
  multiImage: [{ type: String }],
});

export default mongoose.model("MultiImages", multiImage);
