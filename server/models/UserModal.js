import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profilePic: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin", "super-admin"],
    required: true,
  },
});

export default mongoose.model("User", userSchema);
