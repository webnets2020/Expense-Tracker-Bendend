import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: ["First Name Field is required!"],
      trim: true,
    },
    lastName: {
      type: String,
      required: ["Last Name Field is required!"],
      trim: true,
    },
    email: { type: String, required: ["Email Field is required!"], trim: true },
    password: { type: String, required: ["Password Field is required"] },
    categories: [{ label: String, icon: String }],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
